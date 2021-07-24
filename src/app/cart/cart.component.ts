import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  item:any
  subTotal: any = 1.99
  tax: any = this.subTotal*0.07
  total: any = this.subTotal*1.07

  constructor(public cart: CartService) { }

  ngOnInit(): void {
    this.item = {
      amount: "1",
      name: "melon(s)",
      price: "$1.99",
    }
    
  }

  onAdd() {
    console.log("Add")
    this.cart.addItem("melons",{price:"1.99", amount:"1"})
  }

  onRemove() {
    console.log("Remove")
    this.cart.getTotal()
  }
  
  onDelete() {
    console.log("Delete")
    this.cart.removeItem("melons")
  }

  confirm() {
    console.log("confirm")
    console.log(this.cart.cart)
  }
}
