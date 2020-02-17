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

  constructor(
    private auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  onSubmit(form: NgForm) {
    console.log('Formulario enviado');
    console.log(this.user);
    console.log(form);

    this.auth.loginUser(this.user)
      .subscribe((res) => {
        console.log(res);

        this.router.navigateByUrl('/usuario/perfil');
      },
      (err) => {
        console.log(err.error.error.message);
      });
  }

}
