import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  styleShoes: any = [];
  constructor(public getShoesApi: ProductsService) { }

  ngOnInit(): void {
    console.log('On Shoes Comp')
    this.getAllShoes();
  }

  getAllShoes() {
    return this.getShoesApi.getShoes().subscribe((data: {}) => {
      this.styleShoes = data;
      console.log(this.styleShoes)
    })

  }

}
