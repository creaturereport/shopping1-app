import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any = [];
  cartPrices: any = [];

  constructor() { }


}
