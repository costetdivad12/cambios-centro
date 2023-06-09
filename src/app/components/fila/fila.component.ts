import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { ServicioService } from '../../service/servicio.service';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css'],
})
export class FilaComponent implements OnInit {
  constructor(private service: ServicioService) {}
  dtOptions: any = {};
  @Input() listaBolsaCompatible = [];
  inscritosSinMovimiento: any[] = [];

  async registrarMovimiento(data) {
    const plazasInscrito = this.listaBolsaCompatible[1].plazas;
    const plazasBolsa = data.plazas;
    const cantidadFilas = Math.max(plazasInscrito.length, plazasBolsa.length);
    let plazasBolsaString = '';
    let plazasInscritoString = '';

    plazasBolsa.forEach((plaza) => {
      plazasBolsaString += plaza.plaza + '\n';
    });
    plazasInscrito.forEach((plaza) => {
      plazasInscritoString += plaza.plaza + '\n';
    });

    console.log(plazasBolsaString, plazasInscritoString);

    Swal.fire({
      title: `Confirmar movimiento`,
      html: `<h6>¿Está seguro de registrar el siguiente movimiento de cambio de CT?</h6>
      <table class="table">
        <thead>
          <tr>
            <th>Plazas de Inscrito</th>
            <th>Plazas de Bolsa</th>
            <th>Cantidad CT de Inscrito</th>
            <th>Cantidad CT de Bolsa</th>
          </tr>
        </thead>
        <tbody>
        <tr *ngFor="let item of [].constructor(cantidadFilas); let i = index">
          <td  style="text-align: center; vertical-align: middle;"> ${plazasInscritoString} </td>
          <td  style="text-align: center; vertical-align: middle;">${plazasBolsaString}</td>
          <td  style="text-align: center; vertical-align: middle;">${plazasInscrito.length}</td>
          <td  style="text-align: center; vertical-align: middle;">${plazasBolsa.length}</td>
        </tr>

        </tbody>
      </table>`,
      icon: 'warning',
      width: '65em',
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, registrar',
      cancelButtonText: 'Cancelar',
      allowEscapeKey: false,
      allowOutsideClick: false,
      //https://sweetalert2.github.io/#examples AJAX request example
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Movimiento guardado',
          'El movimiento fue registrado correctamente.',
          'success'
        );
      }
      if (result.isDenied) {
        Swal.fire(
          'Movimiento denegado',
          'Ocurrio un error al intentar guardar el movimiento',
          'error'
        );
      }
    });
  }
  ngOnInit(): void {}
}
