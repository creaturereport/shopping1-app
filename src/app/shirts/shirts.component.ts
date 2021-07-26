import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Product } from '../classes/product';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
  styleShirts: any = []

  constructor(public getProductsApi: ProductsService, public cartApi: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(){
    return this.getProductsApi.getProducts("Shirts").subscribe((data: {}) =>{
      this.styleShirts = data;
      console.log(this.styleShirts)
    })
  }
   
  addItem(item: Product){
    // console.log(item)
    return this.cartApi.addToCart(item)
  }
  
}
