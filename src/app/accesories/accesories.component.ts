import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service.service';


@Component({
  selector: 'app-accesories',
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.css']
})
export class AccesoriesComponent implements OnInit {

  accesoriesData: any =[]
  
  constructor(public getProductsAPI: ProductService) { }

  ngOnInit(): void {
    this.getProducts("Watches")
  }

  getProducts(Item: string) {
    return this.getProductsAPI.getProduct(Item).subscribe((data: {}) => {
      this.accesoriesData = data;
    })
  }

}
