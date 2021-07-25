import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartArr: any = []
  cartTotal: number = 0;

  loggedInUser = "";

  constructor(public cartApi: CartService, public loginApi: LoginService) { }

  ngOnInit(): void {
    this.getCartContents();
    console.log(this.cartArr)
    this.getTotalPrice();
    console.log(this.cartTotal)

    this.loggedInUser = this.loginApi.loggedInUser.userName;
    console.log(this.loggedInUser);
    
  }

  getCartContents(){
    this.cartArr = this.cartApi.cart
  }

  getTotalPrice(){
    
    this.cartArr.forEach((element: any) => {
     this.cartTotal += parseFloat(element.price)
   });
   
  }
}
