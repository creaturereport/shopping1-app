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
}
