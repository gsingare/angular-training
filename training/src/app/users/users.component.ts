import { Component } from '@angular/core';
import { RouteService} from '../service/route.service';
@Component({
  selector: 'user-list',
  template : '<div>i am in List Users {{users | json}}</div>'
})

export class usersComponent {
    public users = {};
constructor(private routeService: RouteService){
this.users = this.routeService.getRouteData();
console.log("user list is" + JSON.stringify(this.users));
}
} 