import { Component, Input } from '@angular/core';

@Component({
  selector: 'datagrid',
  templateUrl: "./datagrid.component.html",
  styleUrls: ["./datagrid.compnent.css"]
})

export class DatagridComponent  {
  
  @Input() table;
  
}
