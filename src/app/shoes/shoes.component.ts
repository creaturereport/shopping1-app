import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Product } from '../classes/product';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  shoeStyles: any = []

  constructor(public getProductsApi: ProductsService, public cartApi: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    return this.getProductsApi.getProducts("Shoes").subscribe((data: {}) =>{
      this.shoeStyles = data;
    })
  } 
  
  addItem(item: Product){
    // console.log(item)
    return this.cartApi.addToCart(item)
  }

}
