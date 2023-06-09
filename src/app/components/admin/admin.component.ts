import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  @Input() listaBolsaCompatible = [];

  constructor() {}

  recibirListaBolsaEnAdmin(lista) {
    this.listaBolsaCompatible = lista;
    console.log('Lista recibida en admin', lista[0]);
  }
  ngOnInit(): void {}
}
