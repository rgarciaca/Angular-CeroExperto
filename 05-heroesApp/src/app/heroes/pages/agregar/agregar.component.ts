import { Component, OnInit, Pipe } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics', 
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor( private heroesService: HeroesService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private _snackBar: MatSnackBar,
                public dialog: MatDialog ) { }

  ngOnInit(): void {

    if (this.router.url.includes('editar')){
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.heroesService.getHeroePorId(id) )
          )
          .subscribe( ( heroe ) => this.heroe = heroe );
    }
  }

  guardar() {
    if( this.heroe.superhero.trim().length === 0) return;

    if (this.heroe.id) {
      this.heroesService.putHeroe(this.heroe)
        .subscribe( resp => {
          this.mostrarSnackBar(`Héroe actualizado: ${ resp.superhero }`);
        }); 
    } else {
      this.heroesService.postHeroe(this.heroe)
        .subscribe( resp => {
          this.mostrarSnackBar(`Héroe creado: ${ resp.superhero }`);
          this.router.navigate(['/heroes/editar', resp.id]);
        }); 
    }


  }

  eliminar() {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      width: '400px',
      data: this.heroe,
    });

    dialogRef.afterClosed().subscribe( (result) => {
      if (result!) {
        this.heroesService.deleteHeroe(this.heroe.id!)
        .subscribe( resp => {
          this.mostrarSnackBar(`Héroe eliminado: ${ this.heroe.superhero }`);
          this.router.navigate(['/heroes']);
        }); 
      }
    });


  }

  mostrarSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'Cerrar', {
      duration: 2500
    });
  }

}
