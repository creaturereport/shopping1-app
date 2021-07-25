import { Injectable } from '@angular/core';
import { Cart } from '../classes/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[];

  constructor() {
    this.cart=[]
  }

  addItem(item: Cart) {
    if (this.cart.length === 0) {
      this.cart.push(item)
      console.log(this.cart, "empty cart, item added")
    }
    else {
      for (let index of this.cart) {
        console.log(index)
        if (item.name === index.name) {
          console.log(index, "copy found")
        }
        else {
          this.cart.push(item)
          console.log(this.cart, "item added")
        }
      }
    }
    console.log(this.cart, "test")
  }

  removeItem() {
    
  }

  getTotal() {
    let total: number = 0
    for (let index of this.cart) {
      total += index.price
    }
    console.log(total)
  }

}
