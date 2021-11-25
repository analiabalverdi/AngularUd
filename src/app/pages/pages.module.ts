import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';


import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { sha1 } from '@angular/compiler/src/i18n/digest';
import { AccountSettingsComponent } from './account-settings/account-settings.component';




@NgModule({
  declarations: [
    PagesComponent,
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    AccountSettingsComponent,
  ],
  exports:[
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    DashboardComponent,
    AccountSettingsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule, // necesito importarlo porque estas paginas necesitan del heder y demas
    RouterModule, //fuimos creando modulos, y el codigo comienza a encapsularse. Entonces perdemos a nuestro router oulet en el pages, sin posibilidad que sea visible para el resto, entonces tenemos que importar el routermodule aca.
    ComponentsModule,
  
  ]
})
export class PagesModule { }
