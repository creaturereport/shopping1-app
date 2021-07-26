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
    }
    else {
      for (let i = 0; i < this.cart.length; i++) {
        if (item.name === this.cart[i].name) {
          this.cart[i].quantity += 1;
          copy = true
          break
        }
      }
      if (!copy) {
        this.cart.push(item)
      }
    }
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
  }

  deleteItem(item: Cart) {
    for (let i = 0; i < this.cart.length; i++) {
      if (item.name === this.cart[i].name) {
        this.cart.splice(i,1)
        break
      }
    }
  }

  getSubTotal() {
    let total: number= 0;
    for (let index of this.cart) {
      total += + index.price * index.quantity
    }
    return total
  }

  getTax() {
    return Math.round((this.getSubTotal() * 0.07) * 100) / 100
  }

  getTotal() {
    return Math.round((this.getSubTotal() * 1.07) * 100) / 100 
  }

  getCartCount() {
    return this.cart.length
  }

}
