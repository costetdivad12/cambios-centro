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
  $tableElement = $('.tableContainer');

  getBolsaPorNivel(idNivel) {
    if (idNivel === 0) {
      return;
    }
    console.log(this.$tableElement.prop('scrollHeight'));
    console.log(this.$tableElement);
    this.stopScroll();
    this.service.getBolsaDisponibleByNivel(idNivel).subscribe((data: any) => {
      this.listaBolsa = data.bolsa;
      this.tableScroll();
    });
  }

  scrollState = 'top';

  ngAfterViewChecked(): void {}
  ngOnInit(): void {}

  tableScroll() {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.scrollTop = tableContainer.scrollTop + 1;
    $('p:nth-of-type(1)').html('scrollTop : ' + tableContainer.scrollTop);
    $('p:nth-of-type(2)').html('scrollHeight : ' + tableContainer.scrollHeight);
    if (tableContainer.scrollTop == tableContainer.scrollHeight - 100) {
      tableContainer.scrollTop = 0;
    }
    setTimeout(this.tableScroll, 25);
  }

  animateTable() {
    const st = this.$tableElement.scrollTop();
    const sb =
      this.$tableElement.prop('scrollHeight') -
      this.$tableElement.innerHeight();
    this.$tableElement.animate(
      { scrollTop: st < sb / 2 ? sb : 0 },
      4000,
      this.animateTable
    );
  }

  stopScroll() {
    this.$tableElement.stop();
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
