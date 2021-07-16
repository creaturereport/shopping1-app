import { Component } from '@angular/core';
import { InventoryService } from 'src/inventory/inventory.service';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent {
  title = 'shopping1-app';
 

  constructor(){}


  ngOnInit() {
    
  }
}
