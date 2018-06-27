import { Component } from '@angular/core';
import { log } from 'util';

import {RemoteService} from '../service/remote.service'

@Component({
  selector: 'Registration',
  templateUrl: "./Registration.component.html",
  styleUrls: ['./Registration.component.scss']
})

export class RegistrationComponent  {

  constructor(private remoteService: RemoteService){ }

 public userDetails= {Email:'', Password:'',Emailerror:null,Passworderror:null, disableLogin: true };

 public validateEmail(event){
   this.userDetails.Email = event.target.value;

   if(this.userDetails.Email.length == 0)
  {
    this.userDetails.Emailerror = 'Email is Empty';
  }
 else{ 
   this.userDetails.Emailerror=null;
     }
     if(this.userDetails.Emailerror==null && this.userDetails.Passworderror==null){
       this.userDetails.disableLogin=false;
     }
 }
 public validatePassword(event){
  this.userDetails.Password = event.target.value;
  if(this.userDetails.Password.length == 0){
    this.userDetails.Passworderror = 'Password is  empty ';
  }
  else{
   this.userDetails.Passworderror=null;
  }
  if(this.userDetails.Emailerror==null && this.userDetails.Passworderror==null){
    this.userDetails.disableLogin=false;
  }
 }
 public login() {
   console.log('user Details:'+JSON.stringify(this.userDetails));

   let data='';

   this.remoteService.getResponse('/assets/userdetails.json', {}).subscribe((data) => data = data);
}
}
