import { Component } from '@angular/core';
import { RouteService} from '../service/route.service';

@Component({
    templateUrl : "./information.component.html",
    styleUrls: ['./information.component.scss']
    
})

export class informationComponent {
    constructor(private routeService: RouteService){}
}