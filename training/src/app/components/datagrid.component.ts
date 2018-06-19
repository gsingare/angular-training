import { Component } from '@angular/core';

@Component({
  selector: 'pooja-Angular2',
  templateUrl: "./datagrid.component.html",
  styleUrls: ['./datagrid.component.css']
})
export class dataGridComponent {
  
    public users = [
        {Column1:"Pooja", Column2:"k"},
        {Column1:"Data2", Column2:"Data3" }
    ];

}

 