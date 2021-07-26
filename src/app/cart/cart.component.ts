import { Component, OnInit } from '@angular/core';
import { Cart } from '../classes/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cart: CartService) {}

  ngOnInit(): void {
  }

  itemsInCart() {
    if (this.cart.cart.length >= 1) {
      return true
    }
    else {
      return false
    }
  }

  onAdd(name: string, price: number) {
    let item: Cart = {
      price: price,
      name: name,
      quantity: 1
    }
    this.cart.addItem(item)
  }

  onRemove(name: string, price: number) {
    let item: Cart = {
      price: price,
      name: name,
      quantity: 1
    }
    this.cart.removeItem(item)
  }
  
  onDelete(name: string, price: number) {
    let item: Cart = {
      price: price,
      name: name,
      quantity: 1
    }
    this.cart.deleteItem(item)
  }

  confirm() {
    console.log("confirm")
    // create a thank you for your purchease comp! (timeout on screen then return to home)
  }
}
