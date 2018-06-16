import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rdtech-datagrid',
  templateUrl: "./datagrid.component.html",
  styleUrls: ["./datagrid.compnent.css"]
})

export class DatagridComponent implements OnInit {

  public ngOnInit() {
    console.log(" iam inside the datagrid");

  }
}
