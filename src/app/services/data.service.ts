import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentId: string;

  constructor(
    public afDB: AngularFirestore,
    public auth: AuthService
  ) {
    // this.currentId = this.auth.getCurrentUser();
  }

  firstSession(id: string, email: string) {
    return this.afDB.doc(`datos-personales/${id}`).set({email});
  }

  setInitialValue(collectionName) {
    this.currentId = this.auth.getCurrentUser();

    return new Promise((res, rej) => {
      this.afDB.doc(`${collectionName}/${this.currentId}`).set({})
        .then(() => {
          res();
        })
        .catch((err) => {
          rej(err);
        });
    });
  }

  getDataCollection(collectionName: string) {
    this.currentId = this.auth.getCurrentUser();

    return new Promise((res, rej) => {
      this.afDB.doc(`${collectionName}/${this.currentId}`).valueChanges()
      .subscribe((resp) => {
        if (!resp) {
          this.setInitialValue(collectionName);
        } else {
          res(resp);
        }
      });
    });
  }

  setDataCollection(collectionName: string, data: any) {

    console.log(data);

    return new Promise((res, rej) => {
      this.afDB.doc(`${collectionName}/${this.currentId}`).set(data)
        .then((resp) => {
          res(resp);
        })
        .catch((err) => {
          rej(err);
        });
    });
  }
}