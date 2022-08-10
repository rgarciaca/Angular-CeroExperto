import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { paisSmall } from '../interfaces/paises.interface';
import { Observable, of } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl: string = "https://restcountries.com/v3.1";
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[] {
    return [ ...this._regiones ];
  }

  constructor( private http: HttpClient ) { }

  getPaisesPorRegion( region: string ): Observable<paisSmall[]> {

    return this.http.get<paisSmall[]>(`${ this.baseUrl }/region/${ region }?fields=cca3,translations`);
  }

  getPaisPorCodigo( codigo: string): Observable<Pais[] | []> {
    if(!codigo) return of ([]);

    console.log(codigo);
    return this.http.get<Pais[]>(`${ this.baseUrl}/alpha/${ codigo }`);
  }
}
