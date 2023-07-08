import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent implements OnInit {
  @Input() listaBolsaCompatible = [];
  info: any;

  constructor(private router: Router) {}
  currentRoute = this.router.url;
  ngOnInit(): void {
    console.log(this.currentRoute);
  }

  recibirInfoMap(info: any) {
    console.log(info);
    this.info = info;
  }
}
