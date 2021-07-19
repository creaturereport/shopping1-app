import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
 styleShirts: any = []

  constructor(public getShirtsApi: ProductsService) { }

  ngOnInit(): void {
    console.log("On Shirts Comp")
    this.getAllShirts();
  }
  
  getAllShirts(){
    return this.getShirtsApi.getShirts().subscribe((data: {}) =>{
      this.styleShirts = data;
      console.log(this.styleShirts)
    })
  }
 

  
}
