import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  private baseUrl = 'http://kmaida.io/api/wp-json/';

  constructor(private http: Http) { }

  getHomeData$(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}pages?filter[name]=home`)
      .map(this.handleSuccess)
      .catch(this.handleError);
  }

  getWorkData$(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}posts?type=web-work`)
      .map(this.handleSuccess)
      .catch(this.handleError);
  }

  getWorkDetailData$(slug: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}posts?type=web-work&filter[name]=${slug}`)
      .map(this.handleSuccess)
      .catch(this.handleError);
  }

  private handleSuccess(res: Response) {
    let data = res.json();

    console.log(data);

    if (data.length === 1) {
      return data[0];
    } else {
      return data;
    }
    
  }

  private handleError(err: Response | any) {
    let errorMsg = err.message || 'Unable to retrieve data';
    return Observable.throw(errorMsg);
  }

}
