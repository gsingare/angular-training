import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';
import { RemoteService } from './service/remote.service';

@Component({
  selector: 'rd-home',
  templateUrl : './home.component.html'
})

export class HomeComponent  implements OnInit /*, OnChanges, AfterContentInit, AfterViewInit*/ {

  public label = 'hello';

  constructor(private remoteService: RemoteService){ }

public ngOnInit(){
    console.log('I am in init');
   }


/*
public ngOnChanges(){
  console.log('I am in onchange');
}

public ngAfterContentInit(){
  console.log('I am in after content init');
  
}
public ngAfterViewInit(){
  console.log('I am in after view init');
  
}
*/


  public listUsers() {
    
    this.remoteService.getRemoteResponse('/assets/list-users.json');
  }

  public listCompanies(){
      this.remoteService.getRemoteResponse('/assets/list-companies.json');
  }
}

