import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth : Auth | undefined;

  get auth() {
    if (localStorage.getItem("auth")) this._auth = JSON.parse(localStorage.getItem("auth")!);
    return { ...this._auth };
  }

  constructor( private http: HttpClient ) { } 

  login(id: number): Observable<Auth> {
    return this.http.get<Auth>(`${ this.baseUrl}/usuarios/${ id }`)
        .pipe(
          tap( auth => {
            this._auth = auth;
            localStorage.setItem("auth", JSON.stringify(auth));
          })
        )
  }

  logout() {
    this._auth = undefined;
    localStorage.removeItem("auth");
  }
}
