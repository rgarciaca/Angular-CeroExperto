import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: []
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'roBerto';
  nombreUpper: string = 'RoBERTo';
  nombreCompleto: string = 'roBeRTo gArcIa';

  fecha: Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
