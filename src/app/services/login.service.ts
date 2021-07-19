import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL= "https://shopappusers-38b45-default-rtdb.firebaseio.com/"

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
}
