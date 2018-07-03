import { Component } from '@angular/core';
import { RouteService} from '../service/route.service';
import { RemoteService } from '../service/remote.service';

@Component({
    templateUrl : "./company.datagrid.html"
})

export class CompanyComponent {
public googleInfo(){
    //console.log("i am in google company info");
    this.remoteService.getRemoteResponse('assets/info-Google.json');
}
public appleInfo(){
    //console.log("i am in apple company info");
    this.remoteService.getRemoteResponse('assets/info-Apple.json');
}
public microsoftInfo(){
    //console.log("i am in microsoft company info");
    this.remoteService.getRemoteResponse('assets/info-Microsoft.json');
}
    
    public companies = {};
    constructor(private routeService: RouteService, private remoteService: RemoteService){
    this.companies = this.routeService.getRouteData();
}
}
