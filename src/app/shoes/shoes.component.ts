import { Component, OnInit } from '@angular/core';
import { Cart } from '../classes/cart';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  shoeStyles: any = [];

  constructor(public getShoesApi: ProductsService, public cart: CartService) { }

  ngOnInit(): void {
    console.log('on shoes comp')
    this.getAllShoes();
  }

  getAllShoes(){
    return this.getShoesApi.getShoes().subscribe((data: {}) =>{
      this.shoeStyles = data;
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