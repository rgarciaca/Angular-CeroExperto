import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[] = [
    { ruta: '/graficas/barra', nombre: 'Barras'},
    { ruta: '/graficas/barra-doble', nombre: 'Barras Dobles'},
    { ruta: '/graficas/dona', nombre: 'Dona'},
    { ruta: '/graficas/dona-http', nombre: 'Dona Http'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
