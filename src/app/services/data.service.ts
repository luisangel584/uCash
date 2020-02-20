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
    this.currentId = this.auth.getCurrentUser();
  }

  setInitialValue(collectionName) {
    this.afDB.doc(`${collectionName}/${this.currentId}`).set({});
  }

  getDataCollection(collectionName: string) {

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