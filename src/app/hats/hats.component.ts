import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/inventory/inventory.service';

@Component({
  selector: 'app-hats',
  templateUrl: './hats.component.html',
  styleUrls: [ './hats.component.css' ]
})
export class HatsComponent implements OnInit {

  styleHats: any;

  constructor(private inventoryService: InventoryService){}

  getHats(){
    this.inventoryService.getHats().subscribe(inventory =>{
      this.styleHats = inventory
    });
  }

  ngOnInit() {
    this.getHats();
  }

}
