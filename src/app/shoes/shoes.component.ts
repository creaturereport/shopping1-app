import { Component, Input, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  @Input('ngModel')
    shoeID!: NgModel

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

  addToCart(id: any){
    let selectedShoe = this.shoeStyles.filter((shoe: any) => {
      return shoe.id === id;
    })
    this.cartApi.cart.push(selectedShoe[0])
    
  }

}
