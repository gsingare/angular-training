import { Component } from '@angular/core';
import { RemoteService} from '../service/remote.service';

@Component({
  selector: 'user-registration',
  templateUrl : "./user.registration.html",
  styleUrls: ['./user.registration.scss']
})

export class userRegistration {

constructor(private remoteservice: RemoteService) {}

  public userdetails = {firstname: "", lastname: "", email :"", password:"", 
  firstnameerror:"", lastnameerror:"", emailerror:null, passworderror:null, disableLogin: true};
public _userDetails;
  public validateEmail(event){
    console.log ("validating the email");
    this.userdetails.email = event.target.value;

    if (this.userdetails.email.length == 0){
      this.userdetails.emailerror="email cannot be empty"
     }else{
       this.userdetails.emailerror=null;
     }
     if(this.userdetails.emailerror == null){
       this.userdetails.disableLogin = false;
     }
  }
  public validatePassword(event){
    console.log ("validating the password");
    this.userdetails.password = event.target.value;

    if (this.userdetails.password.length == 0){
      this.userdetails.passworderror="password cannot be empty"
     }else if(this.userdetails.password.length < 8){
      this.userdetails.passworderror="password requires minimum 8 characters"
     }else if(this.userdetails.password.length >= 8 && this.userdetails.password.length <= 16){
      this.userdetails.passworderror=null;
     }else if(this.userdetails.password.length > 16){
      this.userdetails.passworderror="password should be with in 8-16 characters only"
   }
   if(this.userdetails.passworderror == null){
    this.userdetails.disableLogin = false;
  }else{this.userdetails.disableLogin = true;
  }
  }
  public login(){

    if (this.userdetails.firstname.length == 0){
      this.userdetails.firstnameerror="First Name cannot be empty"
     }else{
       this.userdetails.firstnameerror=null;
     }

     if(this.userdetails.firstnameerror == null){
      this.userdetails.disableLogin = false;
    }

     if (this.userdetails.lastname.length == 0){
      this.userdetails.lastnameerror="Last Name cannot be empty"
     }else{
       this.userdetails.lastnameerror=null;
     }
     if(this.userdetails.lastnameerror == null){
      this.userdetails.disableLogin = false;
    }

    let data = '';
    this.remoteservice.getResponse('/assets/userdetails.json',{}).subscribe((data) => this._userDetails = data);

    
  }
}