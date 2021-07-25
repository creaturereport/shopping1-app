import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { Product } from '../classes/product';


@Component({
  selector: 'app-hats',
  templateUrl: './hats.component.html',
  styleUrls: ['./hats.component.css']
})



export class HatsComponent implements OnInit {
  hatStyles: any = []

   
  constructor(public getProductsApi: ProductsService, public cartApi: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  

  getProducts(){
    return this.getProductsApi.getProducts("Hats").subscribe((data: {}) =>{
      this.hatStyles = data;
    })
  }
  
  addItem(item: Product){
    // console.log(item)
    return this.cartApi.addToCart(item)
  }

}
