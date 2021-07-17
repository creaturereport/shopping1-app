import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../classes/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //Define Api Details

  url = 'https://shopping-app-a6713-default-rtdb.firebaseio.com/'
  // pantsUrl
  // watchesUrl

  constructor(private http: HttpClient) { }
    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  

    getProducts(type: string): Observable<Product>{
      return this.http.get<Product>(this.url + type + ".json") 
    }
    // getPants(): Observable<Product>{
    //   return this.http.get<Product>(this.shirtsUrl)
    // }
}
