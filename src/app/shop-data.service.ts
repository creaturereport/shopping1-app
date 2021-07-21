import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class retailData {
  "id": number;
  "name": string;
  "price": number;
  "image_url": string;
  
}

@Injectable({
  providedIn: 'root'
})

//Define Api Details
//Create a url to point to each product type and replace data in 
export class ShopDataService {

  shirtsList = 'https://shopping-app-data-default-rtdb.firebaseio.com/Shirts.json';
  hatsList = 'https://shopping-app-data-default-rtdb.firebaseio.com/Hats.json';
  shoesList = 'https://shopping-app-data-default-rtdb.firebaseio.com/Shoes.json';
  pantsList = 'https://shopping-app-data-default-rtdb.firebaseio.com/Pants.json';
  accessoriesList = 'https://shopping-app-data-default-rtdb.firebaseio.com/Watches.json';




  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getShirts(): Observable<retailData> {
    return this.http.get<retailData>(this.shirtsList)
  }

  getHats(): Observable<retailData> {
    return this.http.get<retailData>(this.hatsList)
  }

  getShoes(): Observable<retailData> {
    return this.http.get<retailData>(this.shoesList)
  }

  getPants(): Observable<retailData> {
    return this.http.get<retailData>(this.pantsList)
  }

  getAccessories(): Observable<retailData> {
    return this.http.get<retailData>(this.accessoriesList)
  }

  




  


}
