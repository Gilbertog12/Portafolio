import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: ProductoInterface[];
  cargando = true

  constructor( private http:HttpClient) { 
    
    this.cargarProductos();
    
  }

  private cargarProductos(){

    this.http.get('https://portafolioangular-155be-default-rtdb.firebaseio.com/productos_idx.json').
    subscribe((resp : ProductoInterface[])=>{

      this.productos = resp
      console.log(resp)
      setTimeout(() => {
        
        this.cargando = false
      }, 2000);
    })
      
  }


}
