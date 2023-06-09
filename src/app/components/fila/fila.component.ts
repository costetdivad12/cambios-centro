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
  @Input() listaBolsaCompatible: Array<Object> = [];
  inscritosSinMovimiento: any[] = [];

  tableArray = [
    {
      idBolsa: 1,
      horasTotales: 45,
      plazas: [
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR1070B',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Jiutepec',
        },
      ],
    },
    {
      idBolsa: 1,
      horasTotales: 45,
      plazas: [
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
      ],
    },
    {
      idBolsa: 1,
      horasTotales: 45,
      plazas: [
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR1070B',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Jiutepec',
        },
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
      ],
    },
    {
      idBolsa: 1,
      horasTotales: 45,
      plazas: [
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR1070B',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Jiutepec',
        },
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
      ],
    },
    {
      idBolsa: 1,
      horasTotales: 45,
      plazas: [
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR1070B',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Jiutepec',
        },
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
      ],
    },
    {
      idBolsa: 1,
      horasTotales: 45,
      plazas: [
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR1070B',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Jiutepec',
        },
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
      ],
    },
    {
      idBolsa: 1,
      horasTotales: 45,
      plazas: [
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR1070B',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Jiutepec',
        },
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
      ],
    },
    {
      idBolsa: 1,
      horasTotales: 45,
      plazas: [
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR1070B',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Jiutepec',
        },
        {
          plaza: 'abc',
          asignatura: 'Matematicas',
          categoria: 'E0722',
          horas: '15',
          CCT: '17DPR0001A',
          nombreCT: 'Nombre escuela largo',
          municipio: 'Cuernavaca',
        },
      ],
    },
  ];

  async registrarMovimiento(data) {
    console.log(data);
    const cantidadPlazasBolsa = data.plazas.length;
    const asignaturaBolsa = data.plazas[0].asignatura;
    const categoriaBolsa = data.plazas[0].categoria;
    const { horasTotalesBolsa: horasTotales } = data;

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
          <tr>
            <td style="text-align: center; vertical-align: middle;">071713E034100100009</td>
            <td style="text-align: center; vertical-align: middle;" rowspan="2">071711E012100300006</td>
            <td style="text-align: center; vertical-align: middle;" rowspan="2">2 CTs</td>
            <td style="text-align: center; vertical-align: middle;" rowspan="2">1 CT</td>
          </tr>
          <tr>
            <td style="text-align: center; vertical-align: middle;">071713E034100100009</td>
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