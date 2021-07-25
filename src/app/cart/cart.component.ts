import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cart: CartService) { }

  ngOnInit(): void {
  }

  onAdd() {
    console.log("Add")
  }

  onRemove() {
    console.log("Remove")
  }
  
  onDelete() {
    console.log("Delete")
  }

  confirm() {
    console.log("confirm")
  }
}
