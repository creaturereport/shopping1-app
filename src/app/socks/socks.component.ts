import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-socks',
  templateUrl: './socks.component.html',
  styleUrls: ['./socks.component.css']
})
export class SocksComponent implements OnInit {
  styleSocks: any = []

  constructor(public getSocksApi: ProductsService) { }

  ngOnInit(): void {
    console.log('On Socks Component')
    this.getAllSocks();
  }

  getAllSocks() {
    return this.getSocksApi.getSocks().subscribe((data: {}) => {
      this.styleSocks = data;
      console.log(this.styleSocks)
    })
  }
}
