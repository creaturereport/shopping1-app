import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { transition, state, style, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-hats',
  templateUrl: './hats.component.html',
  styleUrls: ['./hats.component.css'],
  animations: [
    trigger('animationOption2', [
      state('close', style({
        opacity: 0,
      })),
      state('open', style({
        opacity: 1,
      })),
      transition('close <=> open', animate(500)),
    ])
  ]
})
export class HatsComponent implements OnInit {
  hatStyles: any = [];

  adding = false; //boolean for adding to cart popup.
  

  constructor(public getHatsApi: ProductsService, public cartApi: CartService) { }

  ngOnInit(): void {
    console.log('on hats comp')
    this.getAllHats();
  }
  

  getAllHats(){
    return this.getHatsApi.getHats().subscribe((data: {}) =>{ 
    this.hatStyles = data;
    
    })
  }

  addToCart(id:any){
    let selectedItem = this.hatStyles.filter((item: any) => {
      return item.id === id
    })
    console.log(selectedItem)
    this.cartApi.cart.push(selectedItem[0]);
    this.adding = !this.adding;
    setTimeout(() => {this.adding = !this.adding}, 1000);
  }

}
