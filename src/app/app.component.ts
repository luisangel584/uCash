import { Component } from '@angular/core';
import { AuthService } from "./services/auth.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uCash';
  isLogged = null;
  constructor(
    public authservices : AuthService
  ){
    
  }
islog(){
  if(this.authservices.userToken!=null){
    this.isLogged = false;
  }else{this.isLogged = true;}
  return this.isLogged
}

logout() {
  this.authservices.logout();
}
}
