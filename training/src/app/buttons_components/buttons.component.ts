import { Component, Input } from '@angular/core';

@Component({
  selector: 'mohan-buttons',
  templateUrl : "./buttons.component.html",
  styleUrls: ['./buttons.component.scss']
})

export class buttonComponent {
    @Input() public table;
   }
