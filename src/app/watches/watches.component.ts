import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

  styleWatches: any = [];

  constructor(public getApi: ProductsService) { }

  ngOnInit(): void {
    this.getAllWatches();
  }

  getAllWatches(){
    return this.getApi.getWatches().subscribe((data: {}) => {
      this.styleWatches = data;
      console.log(this.styleWatches);
    })
  }

}
