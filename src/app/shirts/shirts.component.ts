import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { transition, state, style, animate, trigger } from '@angular/animations';



@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css'],
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
export class ShirtsComponent implements OnInit {
  styleShirts: any = []

  adding = false; //boolean for transition

  constructor(public getShirtsApi: ProductsService, public cartApi: CartService) { }

  ngOnInit(): void {
    console.log("On Shirts Comp")
    this.getAllShirts();
  }
  
  getAllShirts(){
    return this.getShirtsApi.getShirts().subscribe((data: {}) =>{
      this.styleShirts = data;
      console.log(this.styleShirts)
    })
  }

  addToCart(id:any){
    let selectedItem = this.styleShirts.filter((item: any) => {
      return item.id === id
    })
    console.log(selectedItem)
    this.cartApi.cart.push(selectedItem[0]);
    this.adding = !this.adding;
    setTimeout(() => {this.adding = !this.adding}, 1000)
  }
 

  
}
