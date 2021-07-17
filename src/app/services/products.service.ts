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
  hatsUrl = 'https://shopappproducts-default-rtdb.firebaseio.com/Hats.json'
  pantsUrl = 'https://shopappproducts-default-rtdb.firebaseio.com/Pants.json'
  shoesUrl = 'https://shopappproducts-default-rtdb.firebaseio.com/Shoes.json'
  watchesUrl = 'https://shopappproducts-default-rtdb.firebaseio.com/Watches.json'

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
