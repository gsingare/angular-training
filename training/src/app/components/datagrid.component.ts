import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mohan-datagrid',
  templateUrl: "./datagrid.component.html",
  styleUrls: ["./datagrid.compnent.scss"]
})

export class DatagridComponent implements OnInit {

@Input() public table;  

  public ngOnInit() {
    console.log("iam inside the datagrid"); 

  }
}
