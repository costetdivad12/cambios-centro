import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';


@Component({
  selector: 'app-listamovimientos',
  templateUrl: './listamovimientos.component.html',
  styleUrls: ['./listamovimientos.component.css']
})
export class ListamovimientosComponent implements OnInit {
 datos:any=[];
  
 dtOptions: any = [];
 constructor(private service:ServicioService,private router:Router) {
    
   }
  
  ngOnInit(): void {

    this.dtOptions = {
      data: [
        { id: 1, firstName: 'Horacio', lastName: 'Fernandez' },
        { id: 2, firstName: 'Abc', lastName: 'zyx' },
      ],

      columns: [
        {
          title: 'ID',
          data: 'id',
        },
        {
          title: 'First name',
          data: 'firstName',
        },
        {
          title: 'Last name',
          data: 'lastName',
          class: 'none',
        },
      ],
      responsive: true,
    };
  

    this.service.getConMovimiento().subscribe((resp)=>{
      console.log(resp);
      this.datos=resp;
     
  });
  }

  imprimir(id:number,rfc:string){
    
    this.service.imprimirNombramiento(id).subscribe((data:any)=>{
      const blob = new Blob([data], { type: 'application/pdf' });

            const downloadURL = window.URL.createObjectURL(data);
            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = `${rfc}.pdf`;
            link.click();
  }); 
  }

  regresar(){
    this.router.navigateByUrl('homeAdmin');
  }

}
