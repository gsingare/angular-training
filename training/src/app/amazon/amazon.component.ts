import { Component } from '@angular/core';
import { RouteService} from '../service/route.service';

@Component({
    templateUrl : "./amazon.component.html",
    styleUrls: ['./amazon.component.scss']
    
})

export class amazonComponent {
    constructor(private routeService: RouteService){}
}