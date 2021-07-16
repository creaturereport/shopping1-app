import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/inventory/inventory.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  styleAcc: any;

  constructor(private inventoryService: InventoryService){}

  getAccessories(){
    this.inventoryService.getAccessories().subscribe(inventory =>{
      this.styleAcc = inventory
    });
  }

  ngOnInit() {
    this.getAccessories();
  }

}
