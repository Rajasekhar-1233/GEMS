import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./usermanagement/login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'tracking',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPagePageModule)
  },

  {
    path: 'user-registration',
    loadChildren: () => import('./user-registration/user-registration.module').then(m => m.UserRegistrationPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
