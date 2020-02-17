import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from 'src/app/models/user-model.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: UserModel;

  constructor(
    private auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  onSubmit(f) {
    this.auth.registerUser(this.user)
    .subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/usuario/perfil');
    }, (err) => {
      console.log(err.error.error.message);
    });
  }

}
