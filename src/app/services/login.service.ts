import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL= "https://users-authentication-70a63-default-rtdb.firebaseio.com/"

  loggedInUser = {};

  constructor(private http: HttpClient) { }

   // Http Options
    //use this for post calls good for forms
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  

    checkUser(item: string): Observable<any>{
      return this.http.get<any>(this.BASE_URL + item + ".json")
      
    }
    createUser(item: object, location: string ): Observable<any>{
      return this.http.put<any>(this.BASE_URL + location + ".json", item)
    }

    setUser(item: object){
      this.loggedInUser = item;
    }
}
