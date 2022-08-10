import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { paisSmall } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    region: ['', [Validators.required ]],
    pais: ['', [Validators.required ]],
    frontera: ['', [Validators.required]]
  });

  regiones: string[] = [];
  paises: paisSmall[] = [];
  pais!: Pais | null;
  fronteras: string[] = [];

  cargando:boolean = false;

  constructor( private fb: FormBuilder,
              private paisesService: PaisesService ) { }

  ngOnInit(): void {
    this.cargarRegiones();

    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( region => {
          this.cargando = true;
          this.paises = [];
          this.miFormulario.get('pais')?.reset('');
          this.miFormulario.get('frontera')?.disable();
        }),
        switchMap( region => this.paisesService.getPaisesPorRegion( region ))
      )
      .subscribe( paises => {
        this.paises = paises;
        this.cargando = false;
      });

      this.miFormulario.get('pais')?.valueChanges
          .pipe(
            tap( resp => {
              this.cargando = true;
              this.fronteras = [];
              this.miFormulario.get('frontera')?.reset('');
              this.miFormulario.get('frontera')?.enable();
            }),
            switchMap( codigo => this.paisesService.getPaisPorCodigo(codigo))
          )
          .subscribe( pais => {
            this.pais = pais[0];
            this.fronteras = pais[0]?.borders || [];
            this.cargando = false;
          });
  }

  cargarRegiones() {
    this.regiones = this.paisesService.regiones;
  }

  guardar() {

  }

}
