import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Product } from '../classes/product';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {
  watchStyles: any = []

  constructor(public getProductsApi: ProductsService, public cartApi: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    return this.getProductsApi.getProducts("Watches").subscribe((data: {}) =>{
      this.watchStyles = data;
    })
  } 
  
  addItem(item: Product){
    // console.log(item)
    return this.cartApi.addToCart(item)
  }

}
