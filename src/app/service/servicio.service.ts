import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  urlApi: string = environment.urlApi;

  constructor(private http: HttpClient, public routers: Router) {}

  getInscritosSinMovimiento() {
    return this.http
      .get(`${this.urlApi}ccts/inscritos/lista/sinMovimiento`)
      .pipe(map((data) => data));
  }

  getInscritos(valor: number) {
    return this.http
      .get(`${this.urlApi}ccts/inscritos/lista/nivelEducativo/${valor}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
