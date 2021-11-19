import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  
  public labels1: string [] = ['campera', 'pantalon', 'remera']
  public data1 = [
    [20, 20, 60]  
  ]
  public title1: string = "SanMartin"

  public enero: string [] = ['short', 'calza', 'medias']
  public cantidad = [ 20, 50, 30]
  public title2: string = "VillaCabrera"
}