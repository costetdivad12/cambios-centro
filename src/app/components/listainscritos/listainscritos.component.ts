import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { ServicioService } from 'src/app/service/servicio.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-listainscritos',
  templateUrl: './listainscritos.component.html',
  styleUrls: ['./listainscritos.component.css'],
})
export class ListainscritosComponent implements OnInit {
  constructor(private service: ServicioService, private router: Router) {}

  datos: any[];
  inter: any;
  //inter:any;

  tiempo: any;
  ngOnInit(): void {}

  validar(nivel: any) {
    if (nivel == '') {
      Swal.fire({
        title: 'Atención',
        text: 'SELECCIONE UN NIVEL EDUCATIVO.',
        icon: 'error',
      });
    } else {
      if (this.inter && this.inter != undefined) {
        this.inter.unsubscribe();
      }
      if (!this.datos || this.inter == undefined || this.datos.length == 0) {
        this.tiempo = 1000;
      } else {
        this.tiempo = 10000;
      }

      this.inter = interval(this.tiempo).subscribe((val: any) => {
        this.service.getInscritos(nivel).subscribe((resp: any) => {
          this.datos = resp;
          // console.log(this.datos);
        });
      });
    }
  }

  cerrar() {
    this.router.navigateByUrl('login');
    localStorage.removeItem('sesionLista');
  }
}
