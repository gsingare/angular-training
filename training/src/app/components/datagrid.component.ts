import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'ravali-datagrid',
  templateUrl: "./datagrid.component.html",
  styleUrls: ["./datagrid.component.scss"]
})

export class DatagridComponent implements OnInit {
 @Input() public table;

  public ngOnInit() {
    console.log(" iam inside the datagrid");

  }
}
