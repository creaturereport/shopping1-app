
import { Component, OnInit } from '@angular/core';

import { InventoryService } from 'src/inventory/inventory.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

  styleShirts: any;
  counter: number = 0;

  constructor(private inventoryService: InventoryService){}

  getShirts(){
    this.inventoryService.getShirts().subscribe(inventory =>{
      this.styleShirts = inventory
    });
  }

  ngOnInit() {
    this.getShirts();
  }
  addToCart(){
    this.counter++;
  }
  /* @Output() notifyParent : EventEmitter<any> = new EventEmitter();
  addToCart(){
    this.notifyParent.emit(count++);
  } */
  

  
}