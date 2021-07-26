import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../classes/cart';
import { CartService } from '../services/cart.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-purchased',
  templateUrl: './purchased.component.html',
  styleUrls: ['./purchased.component.css']
})
export class PurchasedComponent implements OnInit {

  constructor(public cart: CartService, public LogIn: LoginService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(()=> {
      this.router.navigateByUrl("/home");
      this.cart.cart = []
    }, 15000)
  }

}
