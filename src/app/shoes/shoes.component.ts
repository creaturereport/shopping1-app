import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  styleShoes: any = []

  constructor(public getApi: ProductsService) { }

  ngOnInit(): void {
    this.getAllShoes();
  }

  getAllShoes(){
    return this.getApi.getShoes().subscribe((data: {}) =>{
      this.styleShoes = data;
      console.log(this.styleShoes);
    })
  }

}
