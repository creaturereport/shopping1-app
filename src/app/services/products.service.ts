import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../classes/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //Define Api Details

  shirtsUrl = 'https://shopappproducts-default-rtdb.firebaseio.com/Shirts.json'
  // pantsUrl
  // watchesUrl

  constructor(private http: HttpClient) { }
    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  

    getShirts(): Observable<Product>{
      return this.http.get<Product>(this.shirtsUrl)
    }
    // getPants(): Observable<Product>{
    //   return this.http.get<Product>(this.shirtsUrl)
    // }
}
