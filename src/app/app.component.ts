import { Component } from '@angular/core';
import { Productos } from 'src/interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicioAngular';
  columnasTabla: string[] = ['nombre', 'costo'];
  Visible: boolean =true;
  MostrarOcultar:string= "Ocultar";
  Visible2: boolean =true;
  MostrarOcultar2:string= "Ocultar";
  arreglo = [
    {nombre:'Manzana', costos:'1200'},
    {nombre:'Naranja', costos:'1000'},
    {nombre:'Peras', costos:'800'},
    {nombre:'Cerezas', costos:'1500'},
    {nombre:'Uvas', costos:'1500'},
    {nombre:'Sandia', costos:'2000'},
    {nombre:'Melon', costos:'2500'},
    {nombre:'Granada', costos:'500'},
    {nombre:'Durazno', costos:'900'},
];
  Productos = 
  [  
    {nombre:'Monitor', costos:'10000'},
    {nombre:'Mouse', costos:'8000'},
    {nombre:'Teclado', costos:'9000'},
    {nombre:'Mouse Pad', costos:'12000'},
    {nombre:'Auriculares', costos:'20000'},
    {nombre:'Gabinete', costos:'250000'},
    {nombre:'Camara', costos:'15000'},
    {nombre:'Microfono', costos:'15000'},
    {nombre:'Cables', costos:'5000'},
   
];

constructor(){
this.OcultarMostrar();
}
 OcultarMostrar(){
  if(this.Visible == false){
    this.MostrarOcultar ="Mostrar"
      }else{
        this.MostrarOcultar ="Ocultar"
      }
 }
 OcultarMostrar2(){
  if(this.Visible2 == false){
    this.MostrarOcultar2 ="Mostrar"
      } else{
        this.MostrarOcultar2 ="Ocultar"
      }
 }
}
