import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { transition, state, style, animate, trigger } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css'],
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
export class WatchesComponent implements OnInit {
  watchStyles: any = [];

  adding = false; //boolean for transition

  constructor(public getWatchesApi: ProductsService, public cartApi: CartService) { }

  ngOnInit(): void {
    this.getAllWatches();
  }

  getAllWatches(){
    return this.getWatchesApi.getWatches().subscribe((data: {}) =>{
      this.watchStyles = data;
    })
  }

  addToCart(id:any){
    let selectedItem = this.watchStyles.filter((item: any) => {
      return item.id === id
    })
    console.log(selectedItem)
    this.cartApi.cart.push(selectedItem[0]);
    this.adding = !this.adding;
    setTimeout(() => {this.adding = !this.adding}, 1000);
  }

}
