import { Component, Input } from '@angular/core';

@Component({
  selector: 'pooja-Angular2',
  templateUrl: "./datagrid.component.html",
  styleUrls: ['./datagrid.compnent.css']
})
export class dataGridComponent {
 
    @Input() table;
   

}

  