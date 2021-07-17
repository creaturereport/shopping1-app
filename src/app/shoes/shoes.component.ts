import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  shoeStyles: any = []

  constructor(public getProductsApi: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    return this.getProductsApi.getProducts("Shoes").subscribe((data: {}) =>{
      this.shoeStyles = data;
    })
  }  

}
