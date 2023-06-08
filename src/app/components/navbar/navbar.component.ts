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
  inscritosSinMovimiento: any[] = [];

  refreshSelectPicker() {
    setTimeout(() => {
      $('#participante').selectpicker('refresh');
    }, 2500);
  }

  ngOnInit(): void {
    this.service.getInscritosSinMovimiento().subscribe((resp: any) => {
      this.inscritosSinMovimiento = resp;
      console.log(resp);
      this.refreshSelectPicker();
    });
  }

  ngAfterViewChecked(): void {}
}
