import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from 'src/app/models/user-model.model';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: UserModel;
  isError: string;
  recordarUsuario = false;

  constructor(
    private auth: AuthService,
    public dataService: DataService,
    public router: Router
  ) { }

  ngOnInit() {
    this.user = new UserModel();

    if (localStorage.getItem('uCashLoginMail')) {
      this.user.email = localStorage.getItem('uCashLoginMail');
      this.recordarUsuario = true;
    }
  }

  onSubmit(f) {
    this.auth.registerUser(this.user)
    .subscribe((res) => {
      this.dataService.firstSession(res['localId'], res['email'])
        .then(() => {
          this.router.navigateByUrl('/panel');

          if (this.recordarUsuario) { 
            localStorage.setItem('uCashLoginMail', this.user.email);
          }
        });
    }, (err) => {
      console.log(err.error.error.message);
      this.sendError(err.error.error.message);
    });
  }

  sendError(err: string) {
    //
    let msg: string;

    switch (err) {
      case 'WEAK_PASSWORD : Password should be at least 6 characters': {
        msg = 'Constraseña debe contener al menos 6 caracteres';
        break;
      }
      case 'MISSING_PASSWORD': {
        msg = 'Ingrese una contraseña';
        break;
      }
      case 'EMAIL_EXISTS': {
        msg = 'Ya existe un usuario con el email especificado';
        break;
      }
      default: {
        msg = 'Verifique los datos';
      }
    }

    this.isError = msg;

    setTimeout(() => {
      this.isError = undefined;
    }, 5000);
  }

  closeError() {
    this.isError = undefined;
  }

}
