import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'datagrid',
  templateUrl: "./datagrid.component.html",
  styleUrls: ["./datagrid.compnent.css"]
})

export class DatagridComponent implements OnInit {
  public data =[{Name:"Jyothsna",Id:"1"},
  {Name:"jyo",Id:"2"}];

  public ngOnInit() {
    console.log(" datagrid");

  }
}
