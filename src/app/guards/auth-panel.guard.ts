import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthPanelGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    public router: Router
  ) {
    //
  }
  canActivate(): boolean {

    if (this.auth.currentId) {
      return true;
    } else {
      this.router.navigateByUrl('/ingresar');
      return false;
    }
  }

}
