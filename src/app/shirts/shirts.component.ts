import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Cart } from '../classes/cart';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
 styleShirts: any = []

  constructor(public getShirtsApi: ProductsService, public cart: CartService) { }

  ngOnInit(): void {
    console.log("On Shirts Comp")
    this.getAllShirts();
  }
  
  getAllShirts(){
    return this.getShirtsApi.getShirts().subscribe((data: {}) =>{
      this.styleShirts = data;
      console.log(this.styleShirts)
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
