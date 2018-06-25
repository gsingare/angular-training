import { Component} from '@angular/core';

@Component({
  selector: 'ravali-textbox',
  templateUrl: "./textbox.component.html",

})

export class TextBoxComponent  {
   public users ={
       labels: [
       {label:"First Name"}
   ],
   }
public errorMessage= "";

public onTextChange($event){
    let value = $event.target.value;
 
    if (value.length<10){
        this.errorMessage='Requires minimum 10 characters'
    }
    if (value.length>15){
        this.errorMessage='maximum number of charecters are 15'
    }
}
}