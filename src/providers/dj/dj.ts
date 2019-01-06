import { Dj} from '../../shared/dj';
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
export class DjProvider {

  constructor(public http: Http,
  private processHTTPMsgService: ProcessHttpmsgProvider) { }

  getDjs(): Observable<Dj[]> {
    return this.http.get(baseURL + 'djs')
    .map(res => { return this.processHTTPMsgService.extractData(res); })
    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getDj(id: number): Observable<Dj> {
    return  this.http.get(baseURL + 'djs/'+ id)
    .map(res => { return this.processHTTPMsgService.extractData(res); })
    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getFeaturedDj(): Observable<Dj> {
    return this.http.get(baseURL + 'djs?featured=true')
    .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

}
