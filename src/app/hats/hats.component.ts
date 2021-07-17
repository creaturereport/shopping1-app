import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-hats',
  templateUrl: './hats.component.html',
  styleUrls: ['./hats.component.css']
})
export class HatsComponent implements OnInit {
  hatStyles: any = []

  constructor(public getProductsApi: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    return this.getProductsApi.getProducts("Hats").subscribe((data: {}) =>{
      this.hatStyles = data;
    })
  }  

}
