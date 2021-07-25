import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  Users_URL = "https://shopping-app-users-default-rtdb.firebaseio.com/"

  loggedInUser = new User;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'
    })
  }
    checkUser(item: string): Observable<any>{
      return this.http.get<any>(this.Users_URL + item + ".json")
    }
    
    createUser(item: object, location: string ): Observable<any> {
      return this.http.put<any>(this.Users_URL + location + ".json", item)
    }

    setUser(item: User) {
      this.loggedInUser = item;


    } 

}