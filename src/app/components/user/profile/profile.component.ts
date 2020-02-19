import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  users;
  userRef;


  ngOnInit() {
    
    this.users = this.dataApi.getUserProfile();
   console.log("img",this.users.INEa);
    this.userRef = this.dataApi.getUserRefs();



  }

}
