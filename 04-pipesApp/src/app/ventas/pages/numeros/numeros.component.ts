import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: []
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 2567789.5567;
  porcentaje: number = 0.4861;

  constructor() { }

  ngOnInit(): void {
  }

}
