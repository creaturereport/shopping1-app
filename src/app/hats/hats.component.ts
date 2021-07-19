import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-hats',
  templateUrl: './hats.component.html',
  styleUrls: ['./hats.component.css']
})
export class HatsComponent implements OnInit {
  hatStyles: any = [];

  constructor(public getHatsApi: ProductsService) { }

  ngOnInit(): void {
    console.log('on hats comp')
    this.getAllHats();
  }
  

  getAllHats(){
    return this.getHatsApi.getHats().subscribe((data: {}) =>{ 
    this.hatStyles = data;
    
    })
  }

}
