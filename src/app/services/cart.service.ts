import { Injectable } from '@angular/core';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartList = new Array;
  
  addToCart(item: Product){
    this.cartList.push(item)
    console.log(this.cartList)
  }

}
