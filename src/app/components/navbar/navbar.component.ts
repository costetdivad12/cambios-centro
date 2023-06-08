import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';

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

  mostarDatosInscrito(participante) {
    this.participante = participante;
    console.log(this.participante);
    this.cargarBolsaCompatible(participante.id);
  }

  cargarBolsaCompatible(idInscrito: number) {
    this.service
      .getBolsaCompatibleConInscrito(idInscrito)
      .subscribe((resp: any) => {
        this.listaBolsaCompatible = resp;
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
}
