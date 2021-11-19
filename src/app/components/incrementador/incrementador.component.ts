import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  implements OnInit{
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input() progreso:number=50;
  @Input() btnClass: string ='btn-primary'

  @Output() valorSalida: EventEmitter <number> = new EventEmitter();
  
  //get getPorcentaje() {
  //return `${this.progreso}%`
  //}

  cambiarValor(valor:number){
  
    if (this.progreso >=100 && valor >=0) { //si progreso es 100 y valor quiere ser mas de cero, retornar 100
      this.valorSalida.emit(100);
      return this.progreso =100
    }
    if (this.progreso <=0 && valor <0) { //si progreso es 100 y valor quiere ser mas de cero, retornar 100
      this.valorSalida.emit(0);
      return this.progreso = 0
    }
  
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso)
 }
  
  onChange(nuevoValor: number) {
  
    if(nuevoValor >=100){
      this.progreso = 100;
    } else if (nuevoValor <=0){
      this.progreso = 0
    }else {
      this.progreso = nuevoValor
    }
    this.valorSalida.emit(this.progreso);
  }

}
//la barra de progreso, sera el padre. el contador, el hijo. 
//cambiarValor es la funcion que se dispara cuando se hace click en los botones de mas y menos.
//cambiarValor tendra como parametro el valor que es la cantidad q quiero inc o dec
//cambiarValor, ahora esta definido en el html como que cada vez que dispara sube o baja 5.
//

//