import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public menu:any[] = [

    {
      titulo: 'Dashboard',
      icono: "mdi mdi-gauge",
      submenu: [

        { titulo: 'Main', url: '/' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/grafica1' },

      ]
    }
  ]
  menuItems: any[];

  constructor(private sidebarService:SidebarService)
  
  { 
    //this.menuItems = sidebarService.menu; 
    //console.log(this.menuItems)
   }

   ngOnInit(): void {
  }

}
