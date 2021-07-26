import { Component, OnInit } from '@angular/core';
import { Cart } from '../classes/cart';
import { CartService } from '../services/cart.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cart: CartService, public logIn: LoginService) {}

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

}
