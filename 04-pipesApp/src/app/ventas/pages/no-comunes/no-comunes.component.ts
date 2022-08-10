import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent implements OnInit {

  nombre: string = "Roberto";
  genero: string = "masculino";
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Julia', 'Paula'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.', 
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  persona = {
    nombre: 'Roberto',
    edad: 51,
    direccion: 'Madrid, España'
  }

  heroes = [
      {
        nombre: 'Superman',
        vuela: true
      },
      {
        nombre: 'Robin',
        vuela: false
      },
      {
        nombre: 'Aquaman',
        vuela: false
      }
    ]

    miObs = interval(1000);
    valorPromesa = new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve('Fin de la promesa!!!')
      }, 3500);
    });

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  cambiarPersona() {
    if (this.genero === "femenino"){
      this.nombre = "Roberto";
      this.genero = "masculino"; 
    } else {
      this.nombre = "Miriam";
      this.genero = "femenino";
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

}
