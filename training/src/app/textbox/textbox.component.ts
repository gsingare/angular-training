import { Component, Input} from '@angular/core';

@Component({
  selector: 'pooji-textbox',
  templateUrl: "./textbox.component.html",
  styleUrls: ['./textbox.component.scss']
})


export class textboxComponent {  
@Input() table;



public textValue="hello";
public errorMessage="";

public onTextChange($event){
  let value=$event.target.value;

console.log('length is :'+ value.length);


  if(value.length < 10){
   this.errorMessage="Minimum characters length is not matched";
  }

  if(value.length >= 10 && value.length<=15){
    this.errorMessage="Length is matched";
   }

  if(value.length > 15){
    this.errorMessage="Maximum characters count is 15";
   }

  
  console.log('text box value is :' +$event.target.value);


}


}
