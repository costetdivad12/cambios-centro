import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/login_admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  admin: Admin;
  constructor(private router: Router) {
    this.admin = new Admin();
  }

  ngOnInit(): void {
    localStorage.removeItem('sesionAdmin');
    localStorage.removeItem('sesionLista');
    this.stopScroll();
  }
  stopScroll() {
    $('html, body').animate({
      scrollTop: 0,
    });
  }
  ingresar() {
    Swal.fire({
      title: 'Espere',
      text: 'Iniciando sesión',
      icon: 'info',
      allowOutsideClick: false,
    });
    Swal.showLoading();

    if (this.admin.usuario === 'admin' && this.admin.password === 'iebem2023') {
      Swal.close();
      localStorage.setItem('sesionAdmin', '1');
      this.router.navigateByUrl('homeAdmin');
    } else if (
      this.admin.usuario === 'lista' &&
      this.admin.password === 'iebem2023'
    ) {
      Swal.close();
      localStorage.setItem('sesionLista', '1');
      this.router.navigateByUrl('homeLista');
    } else {
      Swal.fire({
        title: 'Atención',
        text: 'Usuario y/o contraseña incorectos',
        icon: 'error',
      });
    }
  }
}
