import { Component } from '@angular/core';
import { RemoteService } from './service/remote.service';

@Component({
 // selector: 'home-page',
  templateUrl : "./home.component.html",
  styleUrls : ['./home.component.scss']
})

export class HomeComponent {
  
  constructor(private remoteService: RemoteService){ }

  /**public listUsers(){
    //console.log("list users");
    this.remoteService.getRemoteResponse('assets/list-users.json');
  }
  public listCompanies(){
    //console.log("list companies");
    this.remoteService.getRemoteResponse('assets/list-companies.json');
  }*/
}   