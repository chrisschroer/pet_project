import { Club } from '../../shared/club';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
/*
Generated class for the DishProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class ClubProvider {

  constructor(public http: Http,
  private processHTTPMsgService: ProcessHttpmsgProvider) { }

  getClubs(): Observable<Club[]> {
    return this.http.get(baseURL + 'clubs')
    .map(res => { return this.processHTTPMsgService.extractData(res); })
    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getClub(id: number): Observable<Club> {
    return  this.http.get(baseURL + 'clubs/'+ id)
    .map(res => { return this.processHTTPMsgService.extractData(res); })
    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getFeaturedClub(): Observable<Club> {
    return this.http.get(baseURL + 'clubs?featured=true')
    .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

}
