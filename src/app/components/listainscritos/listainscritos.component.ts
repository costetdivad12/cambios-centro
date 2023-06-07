import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-listainscritos',
  templateUrl: './listainscritos.component.html',
  styleUrls: ['./listainscritos.component.css']
})
export class ListainscritosComponent implements OnInit {

  constructor( private service: ServicioService ) { }

  ngOnInit(): void {

      interval(10000).subscribe((val: any) => {
     
      
       this.service.getInscritos(1).subscribe((resp: any) => {
          console.log(resp);

});

        
      }
    );


  }

}
