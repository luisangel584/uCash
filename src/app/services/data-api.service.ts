import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserModel } from '../models/user-model.model';
import 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})
export class  DataApiService {
  

    userData: UserModel;

    constructor(private afs: AngularFirestore) {   }

    getUserProfile(){
        let data = this.afs.collection('datos-personales').valueChanges();
        return data;
    }
    addUserProfile(){}
    updateUserProfile(){}
    deleteUserProfile(){}

    getUserRefs(){
        let dataref = this.afs.collection('referencias-personales').valueChanges();
        return dataref;

      }


}