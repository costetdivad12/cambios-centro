import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ServicioService } from 'src/app/service/servicio.service';
import { logging } from 'protractor';


@Component({
  selector: 'app-listamovimientos',
  templateUrl: './listamovimientos.component.html',
  styleUrls: ['./listamovimientos.component.css']
})
export class ListamovimientosComponent implements OnInit {
  datos: any = [];

  dtOptions: DataTables.Settings = {};

  constructor(private service: ServicioService, private router: Router) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        this.service.getConMovimiento().subscribe((resp) => {
          console.log(resp);
          callback({

            data: resp             // <-- see here

          });

        });

      }
      ,
      columns: [
        {
          title: 'CURP',
          data: 'curp',
        },
        {
          title: 'RFC',
          data: 'rfc',

        },
        {
          title: 'NOMBRE',
          data: 'nombre',

        },
        {
          title: 'APELLIDO PATERNO',
          data: 'apellidoPaterno',

        },
        {
          title: 'APELLIDO MATERNO',
          data: 'apellidoMaterno',

        },
        {
          title: 'NO. PRELACIÓN',
          data: 'numeroPrelacion',

        },
        {
          title: 'DESCRIPCIÓN CAT.',
          data: 'plazas[0].descripcionCategoria',

        },
        {
          title: 'ACCIÓN',
          data: null,
          defaultContent: `<button type='button'
            class='btn btn-danger'
            name='descarga'
            id='descarga'
          >
            Imprimir Nombramiento
          </button> `
        },
      ],
      responsive: true,
      rowCallback: (row:any, data: any, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        const { cells } = row;
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].children.length > 0) {
            $('#descarga', row).off('click');
            $('#descarga', row).on('click', () => {
              console.log(data.id);
              this.imprimir(data.id,data.rfc);
            });
          }
        }

        return row;
      },
    };








  }

  imprimir(id: number, rfc: string) {

    this.service.imprimirNombramiento(id).subscribe((data: any) => {
      const blob = new Blob([data], { type: 'application/pdf' });

      const downloadURL = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = `${rfc}.pdf`;
      link.click();
    });
  }



  regresar() {
    this.router.navigateByUrl('homeAdmin');
  }

}
