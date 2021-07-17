import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {
  watchStyles: any = []

  constructor(public getProductsApi: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    return this.getProductsApi.getProducts("Watches").subscribe((data: {}) =>{
      this.watchStyles = data;
    })
  }  

}
