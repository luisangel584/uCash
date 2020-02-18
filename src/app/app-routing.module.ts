import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { DatosgeneralesComponent } from './components/data/datosgenerales/datosgenerales.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ingresar',
    component: LoginComponent
  },
  {
    path: 'registrarme',
    component: RegisterComponent
  },
  {
    path: 'usuario/perfil',
    component: ProfileComponent
  },
  {
    path: 'usuario/datos-generales',
    component: DatosgeneralesComponent
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
