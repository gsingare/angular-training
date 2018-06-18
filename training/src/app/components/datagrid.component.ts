import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mohan-datagrid',
  templateUrl: "./datagrid.component.html",
  styleUrls: ["./datagrid.compnent.css"]
})

export class DatagridComponent implements OnInit {

public users = [
  {FirstName : "Mohan",LastName : "P"},
  {FirstName : "Govardhan",LastName : "S"},
  {FirstName : "Mohan",LastName : "P"},
  {FirstName : "Govardhan",LastName : "S"},
  {FirstName : "Mohan",LastName : "P"},
  {FirstName : "Govardhan",LastName : "S"}
];

  public ngOnInit() {
    console.log("iam inside the datagrid");

  }
}
