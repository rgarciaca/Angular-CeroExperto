import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`  <h1>{{ title }}</h1>
                <h3>La base es: <strong>{{ base }}</strong></h3>
                
                <button (click)="cambiarNumero( base )"> + {{ base }} </button>
                <span>{{ numero }}</span>
                <button (click)="cambiarNumero( -base )"> - {{ base }}  </button>`
})
export class ContadorComponent {
    title: string = 'Bases de Angular';

    numero: number = 10;
    base: number = 5;
  
    cambiarNumero(valor: number) {
        this.numero += valor;
    }
}