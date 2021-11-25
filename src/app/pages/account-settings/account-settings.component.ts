import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme') //el queryselector es una funcion para buscar algo por selector. el # es para referirnos a un id
  // esto de arriba solo nos trae el color
  public links: NodeListOf<Element>;

  constructor(private settingService: SettingsService) { }

  ngOnInit(): void {

    
    this.settingService.checkCurrentTheme()
  }
  
  changeTheme(theme:string){   //cada vez que hago click en un color, en la consola me aparece el color
    
    this.settingService.changeTheme(theme);
   
  }


  

}


 
