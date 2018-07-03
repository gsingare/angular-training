import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router} from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RouteService} from './route.service';



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
        this.routeService.setRouteData(response);

        if(url == 'assets/list-users.json'){
            this.router.navigate(['home/listUsers']);
            //console.log('response after promise :' + JSON.stringify(response));
        }
        else if(url == 'assets/list-companies.json'){
            this.router.navigate(['home/listCompanies']);
           //console.log('response after promise :' + JSON.stringify(response));
        }
        else if(url == 'assets/info-Google.json'){
            this.router.navigate(['home/infoGoogle']);
            //console.log('response after promise :' + JSON.stringify(response));
        }
        else if(url == 'assets/info-Apple.json'){
            this.router.navigate(['home/infoApple']);
            //console.log('response after promise :' + JSON.stringify(response));
        }
        else if(url == 'assets/info-Microsoft.json'){
            this.router.navigate(['home/infoMicrosoft']);
            //console.log('response after promise :' + JSON.stringify(response));
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
