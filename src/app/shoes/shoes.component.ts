import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/inventory/inventory.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  styleShoes: any;

  constructor(private inventoryService: InventoryService){}

  getShoes(){
    this.inventoryService.getShoes().subscribe(inventory =>{
      this.styleShoes = inventory
    });
  }

  ngOnInit() {
    this.getShoes();
  }

}
