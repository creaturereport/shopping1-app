import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {
  pantStyles: any = []

  constructor(public getProductsApi: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    return this.getProductsApi.getProducts("Pants").subscribe((data: {}) =>{
      this.pantStyles = data;
    })
  }  

}
