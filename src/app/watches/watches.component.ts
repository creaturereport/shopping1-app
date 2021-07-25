import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {
  watchStyles: any = [];

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
  }

}
