import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../classes/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //Define Api Details

  hatsUrl = 'https://u2nv-3d4ed-default-rtdb.firebaseio.com/Hats.json'
  pantsUrl = 'https://u2nv-3d4ed-default-rtdb.firebaseio.com/Pants.json'
  shirtsUrl = 'https://u2nv-3d4ed-default-rtdb.firebaseio.com/Shirts.json'
  shoesUrl = 'https://u2nv-3d4ed-default-rtdb.firebaseio.com/Shoes.json'
  socksUrl = 'https://u2nv-3d4ed-default-rtdb.firebaseio.com/Socks.json'
  watchesUrl = 'https://u2nv-3d4ed-default-rtdb.firebaseio.com/Watches.json'

  

  constructor(private http: HttpClient) { }
    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  

    getHats(): Observable<Product>{
      return this.http.get<Product>(this.hatsUrl)
    }
    
    getPants(): Observable<Product>{
      return this.http.get<Product>(this.pantsUrl)
    }
    
    getShirts(): Observable<Product>{
      return this.http.get<Product>(this.shirtsUrl)
    }

    getShoes(): Observable<Product>{
      return this.http.get<Product>(this.shoesUrl)
    }

    getSocks(): Observable<Product>{
      return this.http.get<Product>(this.socksUrl)
    }

    getWatches(): Observable<Product>{
      return this.http.get<Product>(this.watchesUrl)
    }
    
}
