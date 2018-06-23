import { Component, Input} from '@angular/core';

@Component({
  selector: 'Textbox',
  templateUrl: "./textbox.component.html",
  styleUrls: ['./textbox.component.scss']
})
export class textboxComponent {
 
   
@Input() table;
}