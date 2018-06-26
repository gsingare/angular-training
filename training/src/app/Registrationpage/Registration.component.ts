import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'Registration',
  templateUrl: "./Registration.component.html",
  styleUrls: ['./Registration.component.scss']
})

export class RegistrationComponent  {
  
 public userDetails= {Email:'', Password:'',Emailerror:'',Passworderror:''};

 public login() {
   console.log('User Details:'+JSON.stringify(this.userDetails));
  
   if(this.userDetails.Email.length == 0){
     console.log('Mandatory Field');
     this.userDetails.Emailerror = 'Email is Empty';
  }
 if(this.userDetails.Password.length==0){
  console.log('password is empty');
  this.userDetails.Passworderror = 'Password is  empty ';
}
if(this.userDetails.Password.length<10){
  this.userDetails.Passworderror = 'Minimum 5 characters required';
}
else if(this.userDetails.Password.length>20){
 this.userDetails.Passworderror = 'Maximum character count is 20';
}
else{
 this.userDetails.Passworderror = null;
}
}
}
