import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

export interface Favorito {
  id: number;
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  persona: Persona = {
    nombre: 'Roberto Garcia',
    favoritos: [
      { id: 1, nombre: 'Fallout 76' },
      { id: 2, nombre: 'Assasins Creed Valhalla'}
    ]
  }

  nuevoFavorito: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarFavorito() {
    if ( !this.nuevoFavorito ) return;

    const favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    }
    this.persona.favoritos.push({ ...favorito });
    this.nuevoFavorito ='';

  }

  eliminarFavorito(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  guardar() {

  }

}
