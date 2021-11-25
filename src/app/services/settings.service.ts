import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme')

  constructor() { 

    const url = localStorage.getItem('theme') || "./assets/css/colors/default-dark.css";
    //getitem lee el tema que esta grabado en el localstorage, pero puede venior vacio entonces pongo uno por defecto
    //const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href',url);
    
  }

  changeTheme(theme:string){   //cada vez que hago click en un color, en la consola me aparece el color
    
    const url = `./assets/css/colors/${theme}.css`; // ya obtenido el color, se lo incorporamos a la seleccion del elemento, nos trae el link con el color seleccionado
    this.linkTheme.setAttribute('href',url); //cambiamos el href por la url
    localStorage.setItem('theme', url);//en el localstorage se guardara el color y el url 
    
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    
    
    const links = document.querySelectorAll('.selector');
    
    links.forEach(elem =>{
      elem.classList.remove('working')
    
    const btnTheme = elem.getAttribute('data-theme') //leo q datatheme tiene el boton
    const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`//armo el url para compararlos.. le pongo la data del boton en el link
    const currentTheme = this. linkTheme.getAttribute('href')//leo q color tiene el tema guardado en el link

     if (btnThemeUrl === currentTheme){
       elem.classList.add('working');
     }
    })    
  }
}
