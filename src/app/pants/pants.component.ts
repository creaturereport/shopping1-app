import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { transition, state, style, animate, trigger } from '@angular/animations';


@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css'],
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
export class PantsComponent implements OnInit {
  pantStyles: any = [];

  adding = false; //boolean for transition

  constructor(public getPantsApi: ProductsService, public cartApi: CartService) { }

  ngOnInit(): void {
    console.log('on pants comp')
    this.getAllPants();
  }

  getAllPants(){
    return this.getPantsApi.getPants().subscribe((data: {})=>{
      this.pantStyles = data;
      console.log(this.pantStyles)
    })
  }

  addToCart(id:any){
    let selectedItem = this.pantStyles.filter((item: any) => {
      return item.id === id
    })
    console.log(selectedItem)
    this.cartApi.cart.push(selectedItem[0]);
    this.adding = !this.adding;
    setTimeout(() => {this.adding = !this.adding}, 1000)
  }
  

}
