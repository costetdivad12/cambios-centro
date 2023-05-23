import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { google } from "google-maps";


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
   @ViewChild('mapa', {static: true}) mapaElement:ElementRef;

    map: google.maps.Map;
  constructor() { }

  ngOnInit(): void {

    this.cargarMapa();

    
  }

  cargarMapa(){
    const latlon = new google.maps.LatLng(22.8621500,-102.6106100);
    const mapOpcions:google.maps.MapOptions ={
     center: latlon,
     zoom:5,
     mapTypeId : google.maps.MapTypeId.ROADMAP,

    };

    this.map=new google.maps.Map(this.mapaElement.nativeElement,mapOpcions);
  
  }

}
