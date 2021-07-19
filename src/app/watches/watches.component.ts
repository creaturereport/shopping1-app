import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {
  watchStyles: any = [];

  constructor(public getWatchesApi: ProductsService) { }

  ngOnInit(): void {
    this.getAllWatches();
  }

  getAllWatches(){
    return this.getWatchesApi.getWatches().subscribe((data: {}) =>{
      this.watchStyles = data;
    })
  }

}
