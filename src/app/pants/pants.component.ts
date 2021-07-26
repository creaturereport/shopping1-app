import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Product } from '../classes/product';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {
  pantStyles: any = []

  constructor(public getProductsApi: ProductsService, public cartApi: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    return this.getProductsApi.getProducts("Pants").subscribe((data: {}) =>{
      this.pantStyles = data;
    })
  } 
  
  addItem(item: Product){
    // console.log(item)
    return this.cartApi.addToCart(item)
  }

}
