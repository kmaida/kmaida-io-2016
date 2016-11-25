import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JSONDataService {
  private baseUrl = '/data/';

  constructor(private http: Http) { }

  getData$(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}data.json`)
      .map(this.handleSuccess)
      .catch(this.handleError);
  }

  private handleSuccess(res: Response) {
    return res.json();
  }

  private handleError(err: Response | any) {
    let errorMsg = err.message || 'Unable to retrieve data';
    return Observable.throw(errorMsg);
  }

}
