import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-lista-bolsa',
  templateUrl: './lista-bolsa.component.html',
  styleUrls: ['./lista-bolsa.component.css'],
})
export class ListaBolsaComponent implements OnInit {
  constructor() {}

  scrollState = 'top';
  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.scrollDown();
  }

  scrollDown() {
    //scroll down
    $('html, body').animate(
      {
        scrollTop: $(document).height(),
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
