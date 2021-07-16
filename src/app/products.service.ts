import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shirts } from './shirts';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //define API

  shirtsUrl = 'https://productlist-31b15-default-rtdb.firebaseio.com/Shirts.json';

  constructor(private http: HttpClient) { }

    /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getShirts(): Observable<Shirts> {
    return this.http.get<Shirts>(this.shirtsUrl)
  }
}
