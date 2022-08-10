import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personaje: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }


  constructor( ) { }

  ngOnInit(): void {
  }
}
