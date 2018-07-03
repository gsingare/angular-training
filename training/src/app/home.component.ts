import { Component } from '@angular/core';
import {RemoteService} from './service/remote.service';

@Component({
  selector: 'ravali-home',
  templateUrl : "/home.component.html"


})

export class HomeComponent {


constructor(private remoteService: RemoteService){}  
  public listUsers(){
    this.remoteService.getRemoteResponse('./assets/list-user.json');
    
  }
  public listCompanies(){
    this.remoteService.getRemoteResponse('./assets/list-companies.json');
    
  }
 
}

