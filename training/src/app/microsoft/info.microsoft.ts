import { Component } from '@angular/core';
import { RouteService} from '../service/route.service';

@Component({
    templateUrl : "./info.microsoft.html"
    //template : '<div>i am in google info  </div>'
})

export class microsoftComponent {
    constructor(private routeService: RouteService){}
}