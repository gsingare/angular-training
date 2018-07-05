import { Component } from '@angular/core';
import { RouteService } from '../service/route.service';


@Component({
    selector: 'user-list',
    templateUrl:"./users.component.html"

})

export class UsersComponent {
    public users = {};
    constructor(private routeService: RouteService){
        this.users = this.routeService.getRouteData();
        console.log('users list is '+ JSON.stringify(this.users));
    }
    
    
}