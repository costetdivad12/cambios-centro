import { Component, ElementRef, Input, OnInit, ViewChild, OnChanges } from '@angular/core';
import { MapsAPILoader } from "@agm/core";


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit,OnChanges {
  @ViewChild('mapa', { static: true }) mapaElement: ElementRef;
  @Input() info:any;
 
  map: google.maps.Map;
  constructor(private mapsAPILoader: MapsAPILoader) {
    this.mapsAPILoader.load().then(() => {

      if(!this.info && this.info==undefined){
        this.cargarMapa();
      }
      
    });
  }
  
  ngOnChanges(changes: any) {
      this.cargarMapa(changes?.info?.currentValue?.ct, changes?.info?.currentValue?.latitud, changes?.info?.currentValue?.longitud);
    
  }

  ngOnInit(): void {
  }

  cargarMapa( ct?:string, lat?:any,lng?:any) {
    const latlon = new google.maps.LatLng(
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

    this.map = new google.maps.Map(this.mapaElement.nativeElement, mapOpcions);

    
    // for (const lugar of lugares) {
      

      const latlog = new google.maps.LatLng(lat, lng);

      const marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latlog,
      });

      const title = '<h4>' + ct + '</h4>';

      const infowindow = new google.maps.InfoWindow({
        content: title,
      });
    
      marker.addListener("click", ()=>{
        console.log('datos mapa',this.info);
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


