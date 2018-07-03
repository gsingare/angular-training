import {Injectable} from '@angular/core';
@Injectable()
export class RouteService{
  
    private routeData;
  
    public setRouteData(data){
        this.routeData=data;
    }
    public getRouteData(){
        return this.routeData;
    }
   
}