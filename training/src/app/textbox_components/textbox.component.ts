import { Component } from '@angular/core';

@Component({
  selector: 'mohan-textbox',
  templateUrl : "./textbox.component.html",
  styleUrls: ['./textbox.component.scss'] 
})

export class textComponent {

  public firstname = "Please Enter your First Name";
  public errorMessage = "";

  public onTextChange($event) {
    let value = $event.target.value;

    if (value.length < 10) {
      this.errorMessage="Requires minimum 10 characters"
    }
    if (value.length >= 10 && value.length <= 15) {
      this.errorMessage="";
    }
    if (value.length > 15) {
      this.errorMessage="Maximum 15 characters only"
    }
  }
    /**@Input() public table;*/
   }
