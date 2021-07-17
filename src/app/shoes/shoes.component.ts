import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service.service';


@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  
  shoesData: any = []

  constructor(public getProductsAPI: ProductService) { }

  ngOnInit(): void {
    this.getProducts("Shoes")
  }

  getProducts(Item: string) {
    return this.getProductsAPI.getProduct(Item).subscribe((data: {}) => {
      this.shoesData = data;
    })
  }

}
