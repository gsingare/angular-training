import { Component} from '@angular/core';
import { NullAstVisitor } from '@angular/compiler';

import {RemoteService} from '../service/remote.service'; 



@Component({
  selector: 'user-registration',
  templateUrl: "./userRegistration.html",
  styleUrls: ['./userRegistration.scss']
})


export class UserRegistrationComponent {  

    
    constructor(private remoteService: RemoteService){ }

    public userDetails={email: '', password: '', username: '', number:'', emailError: null, passwordError: null, usernameError: '', numberError: '', disableLogin: true };
    public _userDetails;
    public validateEmail(event){
        console.log('validating the email');
        this.userDetails.email = event.target.value;

        if(this.userDetails.email.length==0){
            console.log('email is empty');
            this.userDetails.emailError = 'Email cannot be empty ';
        }else{
           this.userDetails.emailError = null;
        }
       
        if(this.userDetails.emailError.length==null && this.userDetails.passwordError.length==null){
            this.userDetails.disableLogin = false;
        }
    }

    

    public validatePassword(event){
        console.log('Validating the password');
        this.userDetails.password = event.target.value;

        if(this.userDetails.password.length==0){
            console.log('password is empty');
            this.userDetails.passwordError = 'Password cannot be empty ';
        }else if(this.userDetails.password.length<5){
            this.userDetails.passwordError = 'Minimum 6 characters required';
        }else if(this.userDetails.password.length>15){
           this.userDetails.passwordError = 'Maximum character count is 15';
        }else{
           this.userDetails.passwordError = null;
        }

        if(this.userDetails.emailError==null && this.userDetails.passwordError==null){
            this.userDetails.disableLogin = false;
        }
    }






    public login(){
         console.log('Inside the login');
         console.log('user details: '+ JSON.stringify(this.userDetails));

         let data = '';

         this.remoteService.getResponse('/assets/userdetails.json', {}).subscribe((data) => this._userDetails = data);

        
         if(this.userDetails.username.length==0){
            
            this.userDetails.usernameError = 'Username cannot be empty ';
        }else if(this.userDetails.username.length<4){
           this.userDetails.usernameError = 'Minimum 5 characters required';
        }
        
        /*
        if(this.userDetails.email.length==0){
             console.log('email is empty');
             this.userDetails.emailError = 'Email cannot be empty ';
         }else{
            this.userDetails.emailError = null;
         }
         

         if(this.userDetails.password.length==0){
             console.log('password is empty');
             this.userDetails.passwordError = 'Password cannot be empty ';
         }else if(this.userDetails.password.length<5){
             this.userDetails.passwordError = 'Minimum 6 characters required';
         }else if(this.userDetails.password.length>15){
            this.userDetails.passwordError = 'Maximum character count is 15';
         }else{
            this.userDetails.passwordError = null;
         }

         */

         if(this.userDetails.number.length==0){
            console.log('Number cannot be empty');
            this.userDetails.numberError = 'Number cannot be empty';
        }else if(this.userDetails.number.length<10){
             this.userDetails.numberError = 'Invalid Phone Number';
        }else{
           this.userDetails.numberError = null;
        }
    }

}
