import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../classes/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //Define Api Details

  shirtsUrl = 'https://shopping-app-57c19-default-rtdb.firebaseio.com/Shirts.json'
  pantsUrl = 'https://shopping-app-57c19-default-rtdb.firebaseio.com/Pants.json'
  watchesUrl = 'https://shopping-app-57c19-default-rtdb.firebaseio.com/Watches.json'
  hatsUrl = 'https://shopping-app-57c19-default-rtdb.firebaseio.com/Hats.json'
  shoesUrl = 'https://shopping-app-57c19-default-rtdb.firebaseio.com/Shoes.json'

  constructor(private http: HttpClient) { }
    // Http Options
    //use this for post calls good for forms
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  

    getShirts(): Observable<Product>{
      return this.http.get<Product>(this.shirtsUrl)
    }
    getPants(): Observable<Product>{
      return this.http.get<Product>(this.pantsUrl)
    }
    getWatches(): Observable<Product>{
      return this.http.get<Product>(this.watchesUrl)
    }
    getHats(): Observable<Product>{
      return this.http.get<Product>(this.hatsUrl)
    }
    getShoes(): Observable<Product>{
      return this.http.get<Product>(this.shoesUrl)
    }
    // getPants(): Observable<Product>{
    //   return this.http.get<Product>(this.shirtsUrl)
    // }
}
