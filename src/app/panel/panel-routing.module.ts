import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './commons/layout/layout.component';
import { DatosGeneralesComponent } from './data/datos-generales/datos-generales.component';
import { DatosPersonalesComponent } from './data/datos-personales/datos-personales.component';
import { SituacionLaboralComponent } from './data/situacion-laboral/situacion-laboral.component';
import { LibretaDireccionesComponent } from './data/libreta-direcciones/libreta-direcciones.component';
import { DatosBancariosComponent } from './data/datos-bancarios/datos-bancarios.component';
import { PrestamosComponent } from './data/prestamos/prestamos.component';


const routes: Routes = [
  {
    path: 'panel',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'datos-personales'
      },
      {
        path: 'datos-personales',
        component: DatosPersonalesComponent
      },
      {
        path: 'datos-generales',
        component: DatosGeneralesComponent
      },
      {
        path: 'situacion-laboral',
        component: SituacionLaboralComponent
      },
      {
        path: 'libreta-direcciones',
        component: LibretaDireccionesComponent
      },
      {
        path: 'datos-bancarios',
        component: DatosBancariosComponent
      },
      {
        path: 'prestamos',
        component: PrestamosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
