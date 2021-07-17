import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-hats',
  templateUrl: './hats.component.html',
  styleUrls: ['./hats.component.css']
})
export class HatsComponent implements OnInit {
  
  styleHats: any = [];

  constructor(public getApi: ProductsService) { }

  ngOnInit(): void {
    this.getAllHats();
  }

  getAllHats(){
    return this.getApi.getHats().subscribe((data: {}) => {
      this.styleHats = data;
      console.log(this.styleHats);
    })
  }

}
