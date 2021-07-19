import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../classes/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //Define Api Details

  shirtsUrl = 'https://products-77aed-default-rtdb.firebaseio.com/Shirts.json'
  hatsUrl = 'https://products-77aed-default-rtdb.firebaseio.com/Hats.json'
  pantsUrl = 'https://products-77aed-default-rtdb.firebaseio.com/Pants.json'
  shoesUrl = 'https://products-77aed-default-rtdb.firebaseio.com/Shoes.json'
  watchesUrl = 'https://products-77aed-default-rtdb.firebaseio.com/Watches.json'

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
    getHats(): Observable<Product>{
      return this.http.get<Product>(this.hatsUrl)
    }
    getPants(): Observable<Product>{
       return this.http.get<Product>(this.pantsUrl)
    }
    getShoes(): Observable<Product>{
      return this.http.get<Product>(this.shoesUrl)
   }
   getWatches(): Observable<Product>{
    return this.http.get<Product>(this.watchesUrl)
 }
}
