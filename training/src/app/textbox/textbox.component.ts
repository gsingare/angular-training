import { Component, Input} from '@angular/core';

@Component({
  selector: 'pooji-textbox',
  templateUrl: "./textbox.component.html",
  styleUrls: ['./textbox.component.scss']
})
export class textboxComponent {
 
   
@Input() table;
}
