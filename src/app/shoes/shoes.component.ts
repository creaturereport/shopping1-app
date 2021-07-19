import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  shoeStyles: any = [];

  constructor(public getShoesApi: ProductsService) { }

  ngOnInit(): void {
    console.log('on shoes comp')
    this.getAllShoes();
  }

  getAllShoes(){
    return this.getShoesApi.getPants().subscribe((data: {}) =>{
      this.shoeStyles = data;
    })
  }

}
