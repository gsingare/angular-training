import { Component, OnInit } from '@angular/core';
import { RemoteService } from './service/remote.service';

@Component({
  selector: 'rd-home',
  templateUrl : './home.component.html'
})

export class HomeComponent implements OnInit {

  constructor(private remoteService: RemoteService){ }

public ngOnInit(){
    console.log('I am in home component');
}

  public listUsers() {
    
    this.remoteService.getRemoteResponse('/assets/list-users.json');
  }

  public listCompanies(){
      this.remoteService.getRemoteResponse('/assets/list-companies.json');
  }
}

