import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-bottoms',
  templateUrl: './bottoms.component.html',
  styleUrls: ['./bottoms.component.css']
})
export class BottomsComponent implements OnInit {

  bottomsData: any = []

  constructor(public getProductsAPI: ProductService) { }

  ngOnInit(): void {
    this.getProducts("Pants")
  }

  getProducts(Item: string) {
    return this.getProductsAPI.getProduct(Item).subscribe((data: {}) => {
      this.bottomsData = data;
    })
  }

}
