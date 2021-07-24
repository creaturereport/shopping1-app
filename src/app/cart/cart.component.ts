import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.item = {
      amount: "1",
      name: "melon(s)",
      price: "$1.99",
    }
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
