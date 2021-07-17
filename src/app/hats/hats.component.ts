import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-hats',
  templateUrl: './hats.component.html',
  styleUrls: ['./hats.component.css']
})
export class HatsComponent implements OnInit {

  hatsData: any = []

  constructor(public getProductsAPI: ProductService) { }

  ngOnInit(): void {
    this.getProducts("Hats")
  }

  getProducts(Item: string) {
    return this.getProductsAPI.getProduct(Item).subscribe((data: {}) => {
      this.hatsData = data;
    })
  }

}
