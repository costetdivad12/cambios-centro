import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { ServicioService } from '../../service/servicio.service';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css'],
})
export class FilaComponent implements OnInit {
  constructor(private service: ServicioService) {}
  motivos = {
    motivoA: '',
    motivoB: '',
    motivoC: '',
    motivoD: '',
    motivoE: 'x',
  };
  dtOptions: any = {};
  @Input() listaBolsaCompatible = [];
  @Output() onUpdateMap: EventEmitter<Array<Object>> = new EventEmitter();
  inscritosSinMovimiento: any[] = [];

  registrarMovimiento(dataInscrito, dataBolsa) {
    const movimiento = {
      idParticipanteBolsa: dataBolsa.id,
      idParticipanteInscrito: dataInscrito.id,
      motivos: this.motivos,
      plazasInscrito: dataInscrito.plazas,
    };

    return this.service.putNuevoMovimiento(movimiento);
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

  async porRegistrarMovimiento(dataBolsa) {
    const dataInscrito = this.listaBolsaCompatible[1];
    const plazasInscrito = this.listaBolsaCompatible[1].plazas;
    const plazasBolsa = dataBolsa.plazas;
    let plazasBolsaString = '';
    let plazasInscritoString = '';

    plazasBolsa.forEach((plaza) => {
      plazasBolsaString += plaza.plaza + '\n';
    });
    plazasInscrito.forEach((plaza) => {
      plazasInscritoString += plaza.plaza + '\n';
    });

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
        const respuesta = this.registrarMovimiento(
          dataInscrito,
          dataBolsa
        ).subscribe(
          (data: any) => {
            const status = data.status;
            Swal.fire({
              title: 'Movimiento guardado',
              text: `El movimiento fue guardado exitosamente.`,
              icon: 'success',
              confirmButtonText: 'Descargar Nombramiento',
              showLoaderOnConfirm: true,
              preConfirm: () => {
                return new Promise((resolve) => {
                  this.imprimir(dataInscrito.id, dataInscrito.rfc);
                  setTimeout(() => {
                    window.location.reload();
                  }, 2000);
                });
              },
            }).then((result) => {});
          },
          (error) => {
            Swal.fire({
              title: 'Error',
              text: `Ocurrió un error al intentar guardar el movimiento, consulte a soporte. \n Error: ${error.status}`,
              icon: 'error',
            });
          }
        );
      }
      if (result.isDenied) {
        Swal.fire(
          'Movimiento denegado',
          'Ocurrió un error al intentar guardar el movimiento',
          'error'
        );
      }
    });
  }
  ngOnInit(): void {}

  ver(info: any) {
    // console.log("ver info ", info.latitud,info.longitud,info.ct);
    this.onUpdateMap.emit(info);
  }
}
