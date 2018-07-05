import { Component } from '@angular/core';
import { RouteService} from '../service/route.service';
import { RemoteService } from '../service/remote.service';
@Component({
    templateUrl: "./company.component.html"
   // template:'<div>I am in list Companies</div>'

})

export class CompanyComponent {
   public intelInfo(){
       console.log("i am in company info");
       this.remoteService.getRemoteResponse('assets/intel-info.json');
   }
   public amazonInfo(){
    console.log("i am in amazon info");
   this.remoteService.getRemoteResponse('assets/amazon-info.json');
}
public gmailInfo(){
    console.log("i am in gmail info");
   this.remoteService.getRemoteResponse('assets/gmail-info.json');
}
   
   public companies = {};
   constructor(private routeService: RouteService, private remoteService: RemoteService){
   this.companies = this.routeService.getRouteData();
}
}