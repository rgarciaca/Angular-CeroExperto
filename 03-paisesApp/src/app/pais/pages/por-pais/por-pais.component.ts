import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        curosr: pointer;
      } 
    `
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais( termino )
      .subscribe( ( resp ) => {
        this.paises = resp;
      }, ( err ) =>{
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais( termino )
        .subscribe( paises => this.paisesSugeridos = paises.splice(0, 5),
        ( err ) => this.paisesSugeridos = [] );
  }

  buscarSugerido( termino: string ) {
    this.buscar( termino );
  }

}
