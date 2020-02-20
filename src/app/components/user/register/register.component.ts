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

  constructor(
    private auth: AuthService,
    public dataService: DataService,
    public router: Router
  ) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  onSubmit(f) {
    this.auth.registerUser(this.user)
    .subscribe((res) => {
      this.dataService.firstSession(res['localId'], res['email'])
        .then(() => {
          this.router.navigateByUrl('/panel');
        });
    }, (err) => {
      console.log(err.error.error.message);
    });
  }

}
