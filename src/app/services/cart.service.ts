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
    let copy: boolean = false;
    if (this.cart.length === 0) {
      this.cart.push(item)
      console.log(this.cart, "empty cart, item added")
    }
    else {
      for (let i = 0; i < this.cart.length; i++) {
        if (item.name === this.cart[i].name) {
          this.cart[i].quantity += 1;
          console.log("copy found, increasing quantity", this.cart[i])
          copy = true
          break
        }
      }
      if (!copy) {
        console.log("new item added to cart", item)
        this.cart.push(item)
      }
    }
    console.log(this.cart, "updated cart")
  }

  removeItem(item: Cart) {
    for (let i = 0; i < this.cart.length; i++) {
      if (item.name === this.cart[i].name) {
        if (this.cart[i].quantity === 1) {
          this.cart.splice(i,1)
        }
        else if (this.cart[i].quantity > 1) {
          this.cart[i].quantity -= 1;
        }
      }
    }
    console.log("Removed Item, New Cart: ", this.cart)
  }

  deleteItem(item: Cart) {}

  getTotal() {
    let total: number= 0;
  }

  getCartCount() {
    return this.cart.length
  }

}
