import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../classes/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL = "https://shopping-app-c9668-default-rtdb.firebaseio.com/"
  EXT = ".json"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  getProduct(item: string): Observable<Product> {
    return this.http.get<Product>(this.URL + item + this.EXT)
  }

}
