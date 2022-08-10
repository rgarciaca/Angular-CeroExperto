import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private dbzservice: DbzService) { }

  ngOnInit(): void {
  }

  get personajes() {
    return this.dbzservice.personajes;
  }

}
