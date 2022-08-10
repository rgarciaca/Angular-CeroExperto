import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: []
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  opcionSeleccionada(e: MatAutocompleteSelectedEvent) {
    if (!e.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe = e.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId(heroe.id)
      .subscribe( heroe => this.heroeSeleccionado = heroe );
  }

  buscando() {
    this.heroesService.getSugerencias(this.termino)
      .subscribe( ( heroes ) => {
        this.heroes = heroes;
      });
  }

}
