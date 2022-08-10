import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: []
})
export class VerPaisComponent implements OnInit {
  hayError: boolean = false;
  pais!: Country;

  constructor( private activatedRoute: ActivatedRoute,
                private paisService: PaisService ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ( params ) => this.paisService.buscarCodigo( params['id'] )),
        tap( console.log )
      )
      .subscribe(resp => {
        this.pais = resp[0];
      });


  }

}
