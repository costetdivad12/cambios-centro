import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private service: ServicioService) {}
  inscritosSinMovimiento: Array<Object> = [];
  participante: any = {};

  listaBolsaCompatible: Array<Object> = [];

  recibirListaBolsa(lista: Array<Object>) {
    this.listaBolsaCompatible = lista;
  }
  @Output() onChangeCurpSelected: EventEmitter<Array<Object>> =
    new EventEmitter();

  mostarDatosInscrito(participante) {
    this.participante = participante;
    this.cargarBolsaCompatible(participante.id);
  }

  cargarBolsaCompatible(idInscrito: number) {
    this.service
      .getBolsaCompatibleConInscrito(idInscrito)
      .subscribe((resp: any) => {
        if (resp == null) {
          Swal.fire({
            icon: 'warning',
            title: 'Sin Resultados',
            text: 'No se encontró bolsa compatible con el Inscrito participante.',
          });
          return;
        }
        this.listaBolsaCompatible = resp;
        this.onChangeCurpSelected.emit([
          this.listaBolsaCompatible,
          this.participante,
        ]);
      });
  }

  refreshSelectPicker() {
    setTimeout(() => {
      $('#participante').selectpicker('refresh');
    }, 1500);
  }

  ngOnInit(): void {
    this.service.getInscritosSinMovimiento().subscribe((resp: any) => {
      this.inscritosSinMovimiento = resp;
      this.refreshSelectPicker();
    });
  }

  ngAfterViewChecked(): void {}

  rechazarMovimiento(idInscrito: number) {
    if (!idInscrito) {
      return;
    }
    this.service.patchRechazarMovimiento(idInscrito).subscribe((resp) => {
      Swal.fire({
        title: '¿Rechazar Participación?',
        showCancelButton: true,
        confirmButtonText: 'Rechazar',
        cancelButtonText: 'Cancelar',
        icon: 'warning',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Movimiento Rechazado',
            text: `El movimiento fue RECHAZADO exitosamente.`,
            icon: 'warning',
            showLoaderOnConfirm: true,
            preConfirm: () => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              });
            },
          }).then((result) => {});
        }
      });
    });
  }

  cerrar() {
    localStorage.clear();
    window.location.reload();
  }
}
