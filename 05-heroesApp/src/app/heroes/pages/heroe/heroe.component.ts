import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router ) { }

  ngOnInit(): void {
     this.activatedRoute.params
       .pipe(
        switchMap(({ id }) => this.heroesService.getHeroePorId(id) )
       )
       .subscribe( ( heroe ) => this.heroe = heroe );
  }

  volverListado() {
    this.router.navigate(['/heroes/listado']);
  }

}
