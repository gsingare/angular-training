import { Component } from '@angular/core';
import { RouteService} from '../service/route.service';

@Component({
    templateUrl : "./gmail.component.html",
    styleUrls: ['./gmail.component.scss']    
})

export class gmailComponent {
    constructor(private routeService: RouteService){}
}