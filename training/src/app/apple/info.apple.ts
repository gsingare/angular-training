import { Component } from '@angular/core';
import { RouteService} from '../service/route.service';

@Component({
    templateUrl : "./info.apple.html"
    //template : '<div>i am in google info  </div>'
})

export class appleComponent {
    constructor(private routeService: RouteService){}
}