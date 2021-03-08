import { Injectable } from '@angular/core';

import { InfoPagina } from '../interfaces/info-pagina.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any;

  constructor( private http: HttpClient ) {

    // console.log('Servicio de infoPagina listo');

    // Leer el archivo JSON
    this.CargarInfo()
    this.cargarEquipo()
    



  }

  private CargarInfo(){

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;
      console.log(resp);


    });


  }

  private cargarEquipo(){

    this.http.get('https://portafolioangular-155be-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

      this.equipo = resp
      console.log(resp);


    });



  }

}



