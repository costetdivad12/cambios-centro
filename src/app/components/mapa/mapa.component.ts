import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { google } from 'google-maps';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  @ViewChild('mapa', { static: true }) mapaElement: ElementRef;
  googel=google.maps;
  map: google.maps.Map;
  constructor() {
    
  }

  ngOnInit(): void {
    this.cargarMapa('ESCUELA SECUNDARIA TECNICA NUM. 27','17DST0035Y',18.639465,-99.208196);
  }

  cargarMapa( nombre:string,ct:string, lat:any,lng:any) {
    const latlon = new this.googel.LatLng(
      18.722644997763087,
      -99.09532312959755
    );
    const mapOpcions: google.maps.MapOptions = {
      center: latlon,
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    const lugares = [
      {
        nombre: 'ESCUELA SECUNDARIA TECNICA NUM. 27',
        ct: '17DST0035Y',
        lat: 18.639465,
        lng: -99.208196,
      },
      {
        nombre: 'OFELIA MARTINEZ',
        ct: '17DJN0368K',
        lat: 18.503815,
        lng: -98.70735,
      },
      {
        nombre: 'TRANSITO SANCHEZ URIOSTEGUI',
        ct: '17DPR1030Y',
        lat: 18.896227,
        lng: -99.249867,
      },
    ];

    // const marker = new google.maps.Marker({
    //   position: ct,
    //   map: this.map,
    // });

    this.map = new this.googel.Map(this.mapaElement.nativeElement, mapOpcions);
    // for (const lugar of lugares) {
      

      const latlog = new this.googel.LatLng(lat, lng);

      const marker = new this.googel.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latlog,
      });

      const title = '<h4>' + ct + '</h4>' + '<p>' + nombre + '</p>';

      const infowindow = new this.googel.InfoWindow({
        content: title,
      });
    
      marker.addListener("click", ()=>{
        marker.setAnimation(google.maps.Animation.BOUNCE);
        infowindow.open(this.map,marker);
      });

     
    
      
      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }

     }

  }

 
  }


