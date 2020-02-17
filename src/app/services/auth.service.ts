import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiRoute = 'https://identitytoolkit.googleapis.com/v1/accounts';
  apiKey = 'AIzaSyCEr0npyG1i8Bu1e1MkcK20KRVZ2fEHf4g';

  userToken: any;

  // urls
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(
    private http: HttpClient
  ) {
    this.readToken();
  }

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

  loginUser(user: UserModel) {
    const dataUser = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.apiRoute}:signInWithPassword?key=${this.apiKey}`,
      dataUser
    ).pipe(
      map((res) => {
        this.writeToken(res['idToken']);
        return res;
      })
    );
  }

  writeToken(userToken) {
    localStorage.setItem('uCashToken', userToken);
    this.userToken = userToken;
  }

  readToken() {
    (localStorage.getItem('uCashToken')) ? this.userToken = localStorage.getItem('uCashToken') : this.userToken = undefined;
    (this.userToken) ? console.log('ok') : console.log('no');
  }

}
