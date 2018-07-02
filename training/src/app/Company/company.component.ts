import { Component } from '@angular/core';
import { RouteService} from '../service/route.service';
@Component({
    template: '<div>i am in List companies {{companies | json}}</div>'
})

export class CompanyComponent {
    public companies = {};
    constructor(private routeService: RouteService){
    this.companies = this.routeService.getRouteData();
}
}
