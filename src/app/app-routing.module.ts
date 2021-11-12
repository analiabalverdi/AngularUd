import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


import { NopagefoundComponent } from '../app/nopagefound/nopagefound.component';




const routes: Routes = [


  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent}

  // path: '/dashboard' PagesRouting
  // path: '/grafica1' PagesRouting
  // path: '/progress' PagesRouting
  // path: '/login' AuthRouting
  // path: '/register' AuthRouting
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
