import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'Registration',
  templateUrl: "./Registration.component.html",
  styleUrls: ['./Registration.component.scss']
})

export class RegistrationComponent  {
  
 public userDetails= {Email:'',password:'',Emailerror:'',passworderror:''};

 public login() {
   console.log('User Details:'+JSON.stringify(this.userDetails));
  
   if(this.userDetails.Email.length == 0){
     console.log('Mandatory Field');
    }
   else{
     this.userDetails.Emailerror = null;
  }

  if(this.userDetails.password.length == 0){
    console.log('Mandatory Field');
    
    this.userDetails.passworderror = null;
 }
 if(this.userDetails.password.length==0){
  console.log('password is empty');
  this.userDetails.passworderror = 'Password cannot be empty ';
}else if(this.userDetails.password.length<10){
  this.userDetails.passworderror = 'Minimum 5 characters required';
}else if(this.userDetails.password.length>20){
 this.userDetails.passworderror = 'Maximum character count is 20';
}else{
 this.userDetails.passworderror = null;
}
}
}
