import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {
  pantStyles: any = [];

  constructor(public getPantsApi: ProductsService) { }

  ngOnInit(): void {
    console.log('on pants comp')
    this.getAllPants();
  }

  getAllPants(){
    return this.getPantsApi.getPants().subscribe((data: {})=>{
      this.pantStyles = data;
      console.log(this.pantStyles)
    })
  }

  

}
