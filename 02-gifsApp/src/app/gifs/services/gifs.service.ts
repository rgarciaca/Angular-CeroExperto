import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'pPa9VH7Kqc8SOCAvp5fZKoSDIe3zSJ7A';
  private servicioUrl: string =  `https://api.giphy.com/v1/gifs`;
  private _historial: string[] = [];

  //TODO: cambiar any por su tipo
  public resultados: any[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient) {
      this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
      this.resultados = JSON.parse(localStorage.getItem("resultados")!) || [];
  } 

  buscarGifs( query: string ) {
    query = query.trim().toLowerCase();

    if (!this._historial.includes(query) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 9);

      localStorage.setItem("historial", JSON.stringify(this._historial));
    }

    const params = new HttpParams()
        .set("api_key", this.apiKey) 
        .set("q", query)
        .set("limit", "12");

    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params })
      .subscribe( ( resp ) => {
        this.resultados = resp.data;
        localStorage.setItem("resultados", JSON.stringify(this.resultados));
      });
  }
}
