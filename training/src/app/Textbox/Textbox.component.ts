import { Component, Input } from '@angular/core';

@Component({
  selector: 'Textbox',
  templateUrl: "./Textbox.component.html",
  styleUrls: ["./Textbox.component.scss"]
})

export class textboxComponent  {
  
  @Input() table;
  
}
