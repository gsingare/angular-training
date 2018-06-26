import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable()
export class RemoteService {

    constructor ( private http: Http) { }

        public getResponse(url:string, params: Object) : Observable<any>{
            return this.http
            .get(url)
            .pipe(map((response: Response) => response.json()));
        }
}