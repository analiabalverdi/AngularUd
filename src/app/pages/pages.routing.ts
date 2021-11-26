import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
    { path: 'dashboard', 
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'ProgresBar'} },
      { path: 'grafica1', component: Grafica1Component, data: {titulo: 'Graficas'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes'} },
      //{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
    }   
  ]
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }