import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

// import { CognitoService } from '../../../rapm1/rapmDemoUi/src/app/usermanagement/cognito/cognito.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('currentUser') != undefined) {
      return true
    }
    else {
      this.router.navigateByUrl("/login")
      return false
    }
  }
}

