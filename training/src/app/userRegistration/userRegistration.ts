import { Component} from '@angular/core';

@Component({
  selector: 'user-registration',
  templateUrl: "./userRegistration.html",
  styleUrls: ["./userRegistration.scss"],

})

export class UserRegistrationComponent  {
 public userDetails={Name:"",Email:"",Password:"",Nameerror:"",Emailerror:"",Passworderror:"",};
 
 public login(){
    if (this.userDetails.Name.length == 0){
        this.userDetails.Nameerror=" Name cannot be empty"
       }else{
         this.userDetails.Nameerror=""
       }
       if (this.userDetails.Email.length == 0){
        this.userDetails.Emailerror=" Email cannot be empty"
       }else{
         this.userDetails.Emailerror=""
       }
       if (this.userDetails.Password.length == 0){
        this.userDetails.Passworderror=" Password cannot be empty"
       }else{
         this.userDetails.Passworderror=""
       }
       if (this.userDetails.Password.length == 0){
        this.userDetails.Passworderror="password cannot be empty"
       }else if(this.userDetails.Password.length < 8){
        this.userDetails.Passworderror="requires atleast minimum 8 characters"
       }else if(this.userDetails.Password.length >= 8 && this.userDetails.Password.length <= 16){
        this.userDetails.Passworderror=""
       }else if(this.userDetails.Password.length > 16){
        this.userDetails.Passworderror=" requires 8-16 characters only"
   
 }
}