import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/dbz.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();
  @Input() personaje: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzservice: DbzService) { }

  ngOnInit(): void {
  }

  agregar( ) {
    if( this.personaje.nombre.trim().length === 0) { return; }

    //this.onNuevoPersonaje.emit(this.personaje);
    this.dbzservice.agregarPersonaje(this.personaje);
    this.personaje = {
      nombre: '',
      poder: 0
    }
  }

}
