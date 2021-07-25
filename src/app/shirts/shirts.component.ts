import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
 styleShirts: any = []

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
  }
 

  
}
