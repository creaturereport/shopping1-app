import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartArr: any = []
  cartTotal: number = 0;



  constructor(public cartApi: CartService) { }

  ngOnInit(): void {
    this.getCartContents();
    console.log(this.cartArr)
    this.getTotalPrice();
    console.log(this.cartTotal)
    
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
