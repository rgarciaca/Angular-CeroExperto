import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {


  items: MenuItem[] = [];

  
  constructor() { }

  ngOnInit() {
      this.items = [
         {
          label: 'Pipes de angular',
          icon: 'pi pi-desktop',
          items: [
            {
              label:'Textos y fechas',
              icon: 'pi pi-align-left',
              routerLink: '/'
            },
            {
              label:'Números',
              icon: 'pi pi-dollar',
              routerLink: 'numeros'
            },
            {
              label:'No comunes',
              icon: 'pi pi-globe',
              routerLink: 'no-comunes'
            }
          ]
         },
         {
          label: 'Pipes personalidos',
          icon: 'pi pi-cog',
          routerLink: 'ordenar'
         }

      ];
  }

}
