import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*   title = 'shopping1-app';
 */
  loggedInUser = "";
  constructor(public loginApi: LoginService) {}
  
  ngOnInit(): void {
  let  loggedInUser = this.loginApi.loggedInUser
  console.log(loggedInUser)
  

  }

}


