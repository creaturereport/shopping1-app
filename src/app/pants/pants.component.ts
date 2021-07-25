import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {
  pantStyles: any = [];

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
  }
  

}
