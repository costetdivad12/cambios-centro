import { Component, OnInit, ElementRef } from '@angular/core';
import { ServicioService } from '../service/servicio.service';
import ResizeObserver from 'resize-observer-polyfill';

declare var $: any;
@Component({
  selector: 'app-lista-bolsa',
  templateUrl: './lista-bolsa.component.html',
  styleUrls: ['./lista-bolsa.component.css'],
})
export class ListaBolsaComponent implements OnInit {
  constructor(private service: ServicioService, private host: ElementRef) {}

  listaBolsa: Array<Object> = [];
  idNivel = '0';
  prevHeight = $('html, body').height();

  getBolsaPorNivel(idNivel) {
    if (idNivel === 0) {
      return;
    }
    this.service.getBolsaDisponibleByNivel(idNivel).subscribe((data: any) => {
      this.stopScroll();

      this.listaBolsa = data.bolsa;

      // this.prevHeight = $('html, body').height();

      this.scrollDown(this.prevHeight);
    });
  }

  scrollState = 'top';

  ngAfterViewChecked(): void {
    this.scrollDown(this.prevHeight);
  }
  ngOnInit(): void {}

  stopScroll() {
    $('html, body').animate({
      scrollTop: 0,
    });
  }

  scrollDown(height) {
    //scroll down
    $('html, body').animate(
      {
        scrollTop: height,
      },
      20000
    );

    //scroll back up
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      12000
    );
  }
}
