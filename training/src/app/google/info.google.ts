import { Component } from '@angular/core';
import { RouteService} from '../service/route.service';

@Component({
    templateUrl : "./info.google.html"
    //template : '<div>i am in google info  </div>'
})

export class googleComponent {
    constructor(private routeService: RouteService){}
}