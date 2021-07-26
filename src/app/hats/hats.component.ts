import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

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
    this.cart.getSubTotal()
  }
  

  getAllHats(){
    return this.getHatsApi.getHats().subscribe((data: {}) =>{ 
    this.hatStyles = data;
    
    })
  }

}
