import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { transition, state, style, animate, trigger } from '@angular/animations';


@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css'],
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
export class ShoesComponent implements OnInit {

  adding = false; //boolean for transition

  shoeStyles: any = [];

  constructor(public getShoesApi: ProductsService, public cartApi: CartService) { }

  ngOnInit(): void {
    console.log('on shoes comp')
    this.getAllShoes();
  }

  getAllShoes(){
    return this.getShoesApi.getShoes().subscribe((data: {}) =>{
      this.shoeStyles = data;
    })
  }

  addToCart(id:any){
    let selectedItem = this.shoeStyles.filter((item: any) => {
      return item.id === id
    })
    console.log(selectedItem)
    this.cartApi.cart.push(selectedItem[0]);
    this.adding = !this.adding;
    setTimeout(() => {this.adding = !this.adding}, 1000)
  }

}
