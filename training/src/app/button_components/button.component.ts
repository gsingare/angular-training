import { Component,Input } from '@angular/core';

@Component({
  selector: 'Buttons',
  templateUrl: "./button.component.html",
  styleUrls: ['./button.component.scss']
})

export class buttonComponent  {
  @Input() public table;
  
}