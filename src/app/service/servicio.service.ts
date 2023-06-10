import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
const httpOptions = {
  statusCode: 200,
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*,http://localhost:4200/',
    Authorization: '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  urlApi: string = environment.urlApi;

  constructor(private http: HttpClient, public routers: Router) {}

  putNuevoMovimiento(movimiento) {
    const {
      idParticipanteBolsa,
      idParticipanteInscrito,
      plazasInscrito,
      motivos,
    } = movimiento;
    const { motivoA, motivoB, motivoC, motivoD, motivoE } = motivos;
    const movimientoPost = {
      idParticipanteBolsa,
      idParticipanteInscrito,
      motivoA,
      motivoB,
      motivoC,
      motivoD,
      motivoE,
      plazas: plazasInscrito,
    };
    return this.http.post(
      `${this.urlApi}ccts/movimiento/save`,
      JSON.stringify(movimientoPost),
      httpOptions
    );
  }

  patchRechazarMovimiento(idInscrito: number) {
    return this.http.patch(
      `${this.urlApi}/ccts/inscritos/rechazo/${idInscrito}`,
      null
    );
  }

  getBolsaCompatibleConInscrito(idInscrito: number) {
    return this.http
      .get(`${this.urlApi}ccts/bolsa/lista/bolsaCompatible/${idInscrito}`)
      .pipe(map((data) => data));
  }

  getInscritosSinMovimiento() {
    return this.http
      .get(`${this.urlApi}ccts/inscritos/lista/sinMovimiento`)
      .pipe(map((data) => data));
  }

  getInscritos(valor: number) {
    return this.http
      .get(
        `${this.urlApi}ccts/inscritos/lista/nivelEducativo/${valor}`,
        httpOptions
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getConMovimiento() {
    return this.http
      .get(`${this.urlApi}ccts/inscritos/lista/conMovimiento`, httpOptions)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  imprimirNombramiento(id: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/pdf');
    return this.http.get(`${this.urlApi}ccts/inscritos/nombramiento/${id}`, {
      headers,
      responseType: 'blob' as 'json',
    });
  }
}
