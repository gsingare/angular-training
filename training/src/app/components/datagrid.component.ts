import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rdtech-datagrid',
  templateUrl: "./datagrid.component.html",
  styleUrls: ["./datagrid.compnent.css"]
})

export class DatagridComponent implements OnInit {

  public users = [
    { firstName: "Mohan", lastName: "P" },
    { firstName: "Govardhan", lastName: "Singareddy" },
    { firstName: "gov1", lastName: "sing1" },
    { firstName: "Govardhan", lastName: "Singareddy" },
    { firstName: "Govardhan", lastName: "Singareddy" },
    { firstName: "Govardhan", lastName: "Singareddy" }
  ];

  public ngOnInit() {
    console.log(" iam inside the datagrid");

  }
}
