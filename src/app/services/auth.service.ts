import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiRoute = 'https://identitytoolkit.googleapis.com/v1/accounts';
  apiKey = 'AIzaSyCEr0npyG1i8Bu1e1MkcK20KRVZ2fEHf4g';

  // urls
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: UserModel) {
    //
    const dataUser = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.apiRoute}:signUp?key=${this.apiKey}`,
      dataUser
    );
  }

}
