import { Component, OnInit } from '@angular/core';
import { Cart } from '../classes/cart';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {
  watchStyles: any = [];

  constructor(public getWatchesApi: ProductsService, public cart: CartService) { }

  ngOnInit(): void {
    this.getAllWatches();
  }

  getAllWatches(){
    return this.getWatchesApi.getWatches().subscribe((data: {}) =>{
      this.watchStyles = data;
    })
  }

  inCartCheck(name: string) {
    for (let i=0; i < this.cart.cart.length; i++) {
      if (name === this.cart.cart[i].name) {
        return true
      }
    }
    return false
  }

  quantity(name: string) {
    for (let i = 0; i < this.cart.cart.length; i++) {
      if (name === this.cart.cart[i].name) {
        return this.cart.cart[i].quantity
      }
    }
    return 0
  }

  addItem(price: number, name: string) {
    let item: Cart = {
      price: price,
      name: name,
      quantity: 1
    }
    this.cart.addItem(item)
  }

  removeItem(name: string, price:number) {
    let item: Cart = {
      price: price,
      name: name,
      quantity: 1
    }
    this.cart.removeItem(item)
  }

}