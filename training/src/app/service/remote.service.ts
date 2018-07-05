import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, NavigationExtras} from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RouteService} from './route.service';
import { log } from 'util';

@Injectable()
export class RemoteService {
    constructor(private http: Http, private routeService: RouteService, private router: Router) { }

    public getResponse(url: string, params: Object): Observable<any> {
        return this.http
            .get(url)
            .pipe(map((response: Response) => response.json()));
    }
 public getRemoteResponse(url) {

    this.callRemote(url).then((response) => {

        console.log('response after promise :' + JSON.stringify(response));

        this.routeService.setRouteData(response);
        
        if(url == '/assets/list-users.json'){
            this.router.navigate(['home/listUsers']);
        }
        else if(url == '/assets/list-companies.json'){
            this.router.navigate(['home/listCompanies']);
        }
        else if(url == 'assets/intel-info.json'){
            console.log('response after promise :' + JSON.stringify(response));
            this.router.navigate(['home/information']);
        }else if(url == 'assets/amazon-info.json'){
            console.log('response after promise :' + JSON.stringify(response));
            this.router.navigate(['home/amazon']);
        }else if(url == 'assets/gmail-info.json'){
            console.log('response after promise :' + JSON.stringify(response));
            this.router.navigate(['home/gmail']);

        }
       
    });
    }



 private callRemote(url) {
     return this.http
     .get(url)
     .pipe(map((response)=> {
         return response.json();
     }))
     .toPromise();
 }
}
