import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from '../classes/new-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users_URL = "https://userdatabase-86f8f-default-rtdb.firebaseio.com/"

  constructor(private http: HttpClient) { }

   // Http Options
    //use this for post calls good for forms
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  

    checkUser(item: string): Observable<any>{
      return this.http.get<any>(this.users_URL + item + ".json")
    }
    
    checkUsers(): Observable<any>{
      return this.http.get<any>(this.users_URL + ".json")
    }

    newUser(userObject: NewUser): Observable<any> {
      return this.http.post<any>(this.users_URL + ".json", userObject)
    }
}
