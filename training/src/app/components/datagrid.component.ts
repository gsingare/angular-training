import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'rdtech-datagrid',
  templateUrl: "./datagrid.component.html",
  styleUrls: ["./datagrid.compnent.css"]
})

export class DatagridComponent implements OnInit {
 @Input() public table;

  public ngOnInit() {
    console.log(" iam inside the datagrid");

  }
}
