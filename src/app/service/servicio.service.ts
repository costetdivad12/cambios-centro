import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
const httpOptions = {
  statusCode: 200,
  headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*,http://localhost:4200/',
      'Authorization': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      "Access-Control-Allow-Credentials": "true",

  }),
};

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
      .get(`${this.urlApi}ccts/inscritos/lista/nivelEducativo/${valor}`,httpOptions)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}