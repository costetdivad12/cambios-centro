import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css'],
})
export class FilaComponent implements OnInit {
  constructor() {}
  dtOptions: any = {};

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
  ngOnInit(): void {
    this.dtOptions = {
      data: [
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 1',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 1',
          municipio: 'Municipio 1',
          ciudad: 'ciudad 21',
          colonia: 'colonia a',
          cp: '62001',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17USU0019W',
          nombre: 'Escuela con nombre grande 2',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 2',
          municipio: 'Municipio 2',
          ciudad: 'ciudad 20',
          colonia: 'colonia b',
          cp: '62002',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 3',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 3',
          municipio: 'Municipio 3',
          ciudad: 'ciudad 19',
          colonia: 'colonia c',
          cp: '62003',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 4',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 4',
          municipio: 'Municipio 4',
          ciudad: 'ciudad 18',
          colonia: 'colonia d',
          cp: '62004',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 5',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 5',
          municipio: 'Municipio 5',
          ciudad: 'ciudad 17',
          colonia: 'colonia e',
          cp: '62005',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 6',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 6',
          municipio: 'Municipio 6',
          ciudad: 'ciudad 16',
          colonia: 'colonia f',
          cp: '62006',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 7',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 7',
          municipio: 'Municipio 7',
          ciudad: 'ciudad 15',
          colonia: 'colonia g',
          cp: '62007',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 8',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 8',
          municipio: 'Municipio 8',
          ciudad: 'ciudad 14',
          colonia: 'colonia h',
          cp: '62008',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 9',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 9',
          municipio: 'Municipio 9',
          ciudad: 'ciudad 13',
          colonia: 'colonia i',
          cp: '62009',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 10',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 10',
          municipio: 'Municipio 10',
          ciudad: 'ciudad 12',
          colonia: 'colonia j',
          cp: '62010',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 11',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 11',
          municipio: 'Municipio 11',
          ciudad: 'ciudad 11',
          colonia: 'colonia k',
          cp: '62011',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 12',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 12',
          municipio: 'Municipio 12',
          ciudad: 'ciudad 10',
          colonia: 'colonia l',
          cp: '62012',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 13',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 13',
          municipio: 'Municipio 13',
          ciudad: 'ciudad 9',
          colonia: 'colonia m',
          cp: '62013',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 14',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 14',
          municipio: 'Municipio 14',
          ciudad: 'ciudad 8',
          colonia: 'colonia n',
          cp: '62014',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 15',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 15',
          municipio: 'Municipio 15',
          ciudad: 'ciudad 7',
          colonia: 'colonia o',
          cp: '62015',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 16',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 16',
          municipio: 'Municipio 16',
          ciudad: 'ciudad 6',
          colonia: 'colonia p',
          cp: '62016',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 17',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 17',
          municipio: 'Municipio 17',
          ciudad: 'ciudad 5',
          colonia: 'colonia q',
          cp: '62017',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 18',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 18',
          municipio: 'Municipio 18',
          ciudad: 'ciudad 4',
          colonia: 'colonia r',
          cp: '62018',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 19',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 19',
          municipio: 'Municipio 19',
          ciudad: 'ciudad 3',
          colonia: 'colonia s',
          cp: '62019',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 20',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 20',
          municipio: 'Municipio 20',
          ciudad: 'ciudad 2',
          colonia: 'colonia t',
          cp: '62020',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
        {
          CV_CCT: '17DBA0012Z',
          nombre: 'Escuela con nombre grande 21',
          categoria: 'E201',
          vialidad_principal: 'vialidad principal calle 21',
          municipio: 'Municipio 21',
          ciudad: 'ciudad 1',
          colonia: 'colonia u',
          cp: '62021',
          plazas: ['plaza 1', 'plaza 2'],
          idInscrito: Math.floor(Math.random() * (100 - 1 + 1) + 1),
          idBolsa: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        },
      ],

      columns: [
        {
          title: 'CCT',
          data: 'CV_CCT',
        },
        {
          title: 'Nombre CT',
          data: 'nombre',
        },
        {
          title: 'Calle',
          data: 'vialidad_principal',
          class: 'none',
        },
        {
          title: 'Municipio',
          data: 'municipio',
        },
        {
          title: 'Categoria',
          data: 'categoria',
        },
        {
          title: 'Opciones',
          data: null,
          defaultContent: `<button id="btnRegistrarCambio" name="btnRegistrarCambio" type="button" class="btn btn-primary">Boton a</button>`,
        },
        {
          title: 'Ciudad',
          data: 'ciudad',
          class: 'none',
        },
        {
          title: 'Colonia',
          data: 'colonia',
          class: 'none',
        },
        {
          title: 'CP',
          data: 'cp',
          class: 'none',
        },
        {
          title: 'Plazas',
          data: 'plazas[,]',
          class: 'none',
        },
      ],
      responsive: true,
      rowCallback: (row, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        const { cells } = row;
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].children.length > 0) {
            $('#btnRegistrarCambio', row).off('click');
            $('#btnRegistrarCambio', row).on('click', () => {
              self.registrarMovimiento(data);
            });
          }
        }

        return row;
      },
    };
  }
}
