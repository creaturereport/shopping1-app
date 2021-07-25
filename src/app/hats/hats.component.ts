import { Component, OnInit } from '@angular/core';
import { Cart } from '../classes/cart';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-hats',
  templateUrl: './hats.component.html',
  styleUrls: ['./hats.component.css']
})
export class HatsComponent implements OnInit {
  hatStyles: any = [];

  constructor(public getHatsApi: ProductsService, public cart: CartService) { }

  ngOnInit(): void {
    console.log('on hats comp')
    this.getAllHats();
  }
  

  getAllHats(){
    return this.getHatsApi.getHats().subscribe((data: {}) =>{ 
    this.hatStyles = data;
    
    })
  }

  addCart(price: number, name: string) {
    let item: Cart = {
      price: price,
      name: name,
      quantity: 1
    }
    this.cart.addItem(item)
  }

}
