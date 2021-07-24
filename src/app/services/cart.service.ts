import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any;
  subTotal: any;

  constructor() { 
    this.cart = {}
  }

  addItem(item: any, property: any) {
    this.cart = {[item]: property}
  }

  removeItem(item: any) {
    delete this.cart[item]
  }

  getTotal() {
    for (let [key, value] of Object.entries(this.cart)) {
      console.log(key, value)
    }
  }

}
