import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-listamovimientos',
  templateUrl: './listamovimientos.component.html',
  styleUrls: ['./listamovimientos.component.css']
})
export class ListamovimientosComponent implements OnInit {
 datos:any;
  constructor(private service:ServicioService) { }

  ngOnInit(): void {
    this.service.getConMovimiento().subscribe((resp)=>{
      console.log(resp);
      this.datos=resp;
    });
  }


  imprimir(id:number,rfc:string){
    console.log("imprimir");
    this.service.imprimirNombramiento(id).subscribe((data:any)=>{
      const blob = new Blob([data], { type: 'application/pdf' });

            const downloadURL = window.URL.createObjectURL(data);
            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = `${rfc}.pdf`;
            link.click();
  }); 
  }

}
