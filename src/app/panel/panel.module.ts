import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PanelRoutingModule } from './panel-routing.module';
import { SidebarComponent } from './commons/sidebar/sidebar.component';
import { LayoutComponent } from './commons/layout/layout.component';
import { DatosGeneralesComponent } from './data/datos-generales/datos-generales.component';
import { DatosPersonalesComponent } from './data/datos-personales/datos-personales.component';
import { SituacionLaboralComponent } from './data/situacion-laboral/situacion-laboral.component';
import { LibretaDireccionesComponent } from './data/libreta-direcciones/libreta-direcciones.component';
import { DatosBancariosComponent } from './data/datos-bancarios/datos-bancarios.component';


@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent,
    DatosGeneralesComponent,
    DatosPersonalesComponent,
    SituacionLaboralComponent,
    LibretaDireccionesComponent,
    DatosBancariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PanelRoutingModule,
    MDBBootstrapModule
  ]
})
export class PanelModule { }
