import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //https://restcountries.com/v3.1/name/united
  //https://restcountries.com/v3.1/region/ame
  //https://restcountries.com/v3.1/capital/lima

  private apiUrl: string ='https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url );
      // .pipe(
      //   catchError( err => of([]))
      // );
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url );
      // .pipe(
      //   catchError( err => of([]))
      // );
  }

  buscarCodigo(codigo: string): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ codigo }`;
    
    return this.http.get<Country>( url );
  }

  buscarRegion(region: string) {
    const url = `${ this.apiUrl }/region/${ region }`;

    return this.http.get<Country[]>( url );
  }

}
