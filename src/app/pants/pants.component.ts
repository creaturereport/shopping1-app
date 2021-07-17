import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

  stylePants: any = []

  constructor(public getApi: ProductsService) { }

  ngOnInit(): void {
    this.getAllPants();
  }

  getAllPants(){
    return this.getApi.getPants().subscribe((data: {}) =>{
      this.stylePants = data;
      console.log(this.stylePants);
    })
  }

}
