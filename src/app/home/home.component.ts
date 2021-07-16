import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/inventory/inventory.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eachItem: any;

  constructor(private inventoryService: InventoryService){}

  getCategories(){
    this.inventoryService.getCategories().subscribe(inventory =>{
      this.eachItem = inventory
    });
  }
  

  ngOnInit() {
    this.getCategories();
  }

}
