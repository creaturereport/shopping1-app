import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../classes/user';
import { Cart } from '../classes/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedInUser = "";
  constructor(public loginApi: LoginService, public cart: CartService) { }
  ngOnInit(): void {
   this.loggedInUser = this.loginApi.loggedInUser.userName;
  }

  uniqueItemCount() {
    return this.cart.cart.length
  }

}
