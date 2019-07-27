import { Injectable } from '@angular/core';

//import http client to make the request
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})

export class DealsService {
  public a = [];
  public value = [];

  private baseUrl = " https://test.pickcel.com/api/v1/getAmazonDeals";

  constructor(private _http: HttpClient) {
    console.log('Deals service called')
  }

  private handleError(err: HttpErrorResponse) {
    console.log('Handle http error');
    console.log(err.message);
    return Observable.throw(err.message);

  }

  public getAmazonDeals(): any {
    let myResponse = this._http.get(this.baseUrl);
    console.log(myResponse);
    return myResponse;
  }




}
