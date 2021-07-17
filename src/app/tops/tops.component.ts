import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent implements OnInit {

  styleShirts: any  = []

  constructor(public getProductsAPI: ProductService) { }
  
  ngOnInit(): void {
    this.getProducts("Shirts")
  }

  getProducts(Item: string) {
    return this.getProductsAPI.getProduct(Item).subscribe((data: {}) => {
      this.styleShirts = data;
    })
  }

}
