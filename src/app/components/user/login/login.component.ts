import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserModel } from 'src/app/models/user-model.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserModel;
  isError: string;
  recordarUsuario = false;

  constructor(
    private auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.user = new UserModel();
    if (localStorage.getItem('uCashLoginMail')) {
      this.user.email = localStorage.getItem('uCashLoginMail');
      this.recordarUsuario = true;
    }
  }

  onSubmit(form: NgForm) {
    // console.log('Formulario enviado');
    // console.log(this.user);
    // console.log(form);

    this.auth.loginUser(this.user)
      .subscribe((res) => {
        this.router.navigateByUrl('/panel');

        if (this.recordarUsuario) { 
          localStorage.setItem('uCashLoginMail', this.user.email);
        } else {
          localStorage.removeItem('uCashLoginMail');
        }
      },
      (err) => {
        console.log(err.error.error.code, err.error.error.message);
        this.sendError(err.error.error.message);

        // this.isError = true;
      });
  }

  sendError(err: string) {
    //
    let msg: string;

    switch (err) {
      case 'MISSING_EMAIL': {
        msg = 'Ingrese correo electrónico';
        break;
      }
      case 'MISSING_PASSWORD': {
        msg = 'Ingrese contraseña';
        break;
      }
      case 'INVALID_PASSWORD': {
        msg = 'Contraseña no válida';
        break;
      }
      case 'INVALID_EMAIL': {
        msg = 'Correo electrónico no válido';
        break;
      }
      case 'EMAIL_NOT_FOUND': {
        msg = 'No se encontró una cuenta asociada al email especificado';
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

  checkRememberUser() {
    if (this.recordarUsuario) {
      console.log('ok');
    } else {
      console.log('no');
    }
  }

}
