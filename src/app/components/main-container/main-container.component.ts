import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent implements OnInit {
  @Input() listaBolsaCompatible = [];
  info:any;

  constructor() {}

  ngOnInit(): void {}

  
  recibirInfoMap(info:any){
    console.log(info);
    this.info = info;
  }



}
