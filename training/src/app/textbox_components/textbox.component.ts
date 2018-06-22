import { Component } from '@angular/core';

@Component({
  selector: 'mohan-textbox',
  templateUrl : "./textbox.component.html",
  styleUrls: ['./textbox.component.scss'] 
})

export class textComponent {
  private users = {

    labels: [
      {label: "First name:"},
      {label: "Last name:"},
      {label: "Phone Number:"},
      {label: "Address:"},
      {label: "E-mail:"}
    ],

  }
  
  public errorMessage = "";

  public onTextChange($event) {
    let value = $event.target.value;

    if (value.length < 5) {
      this.errorMessage="Requires minimum 5 characters"
    }
    if (value.length >= 5 && value.length <= 10) {
      this.errorMessage="";
    }
    if (value.length > 10) {
      this.errorMessage="Maximum 10 characters only"
    }
  }
    
   }
