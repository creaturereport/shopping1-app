import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  constructor() {
    console.log(this.shoesList)
   }

  ngOnInit(): void {
  }

  shoesList: any = [
      {
        id: 7, 
        name: "Sneakers",
        price: "120.00",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcuecV7DfF2yiQZk0aWPCAGf7yeapUcgMxA&usqp=CAU"
      }
  ]

}
