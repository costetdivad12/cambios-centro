import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css'],
})
export class FilaComponent implements OnInit {
  constructor() {}
  dtOptions: DataTables.Settings = {};

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
        },
      ],
    };
  }
}
