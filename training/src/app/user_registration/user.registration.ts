import { Component } from '@angular/core';

@Component({
  selector: 'user-registration',
  templateUrl : "./user.registration.html",
  styleUrls: ['./user.registration.scss']
})

export class userRegistration {
  public userdetails = {firstname: "", lastname: "", email :"", password:"", 
  firstnameerror:"", lastnameerror:"", emailerror:"", passworderror:""};

  public login(){

    if (this.userdetails.firstname.length == 0){
      this.userdetails.firstnameerror="First Name cannot be empty"
     }else{
       this.userdetails.firstnameerror=""
     }

     if (this.userdetails.lastname.length == 0){
      this.userdetails.lastnameerror="Last Name cannot be empty"
     }else{
       this.userdetails.lastnameerror=""
     }

    if (this.userdetails.email.length == 0){
     this.userdetails.emailerror="email cannot be empty"
    }else{
      this.userdetails.emailerror=""
    }

    if (this.userdetails.password.length == 0){
      this.userdetails.passworderror="password cannot be empty"
     }else if(this.userdetails.password.length < 9){
      this.userdetails.passworderror="password requires minimum  characters"
     }else if(this.userdetails.password.length >= 9 && this.userdetails.password.length <= 18){
      this.userdetails.passworderror=""
     }else if(this.userdetails.password.length > 18){
      this.userdetails.passworderror="password should be with in 9-18 characters only"
 
   }
  }
}