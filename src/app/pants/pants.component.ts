import { Component, OnInit } from '@angular/core';
import {InventoryService} from 'src/inventory/inventory.service';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {
  stylePants: any;

  constructor(private inventoryService: InventoryService){}

  getPants(){
    this.inventoryService.getPants().subscribe(inventory =>{
      this.stylePants = inventory
    });
  }

  ngOnInit() {
    this.getPants();
  }

}
