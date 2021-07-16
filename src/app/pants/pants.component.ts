import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  stylePants: any = [
    {
      id: 1, 
      name: "Blue Jeans",
      price: "50.00",
      image_url: "https://us.123rf.com/450wm/vitalily73/vitalily731905/vitalily73190500300/122630810-blue-jeans-isolated-on-white-background-beautiful-casual-jeans-.jpg?ver=6"
    }, 
    {
       id: 2,
      name: "Dark Blue Faded Jeans",
      price: "50.00",
      image_url: "https://us.123rf.com/450wm/saiko3p/saiko3p1004/saiko3p100401062/6786543-jeans-isolated-on-white-background.jpg?ver=6"
    }, 
    {
       id: 3, 
      name: "Cargo Pants",
      price: "65.00",
      image_url: "https://cdn.shopify.com/s/files/1/1300/6871/products/snap-ii-cargo-pants-olive-2_512x772.jpg?v=1564305052"
    }, 
    {
       id: 4, 
      name: "Men's Dress Pants",
      price: "70.00",
      image_url: "https://us.123rf.com/450wm/krasyuk/krasyuk1111/krasyuk111100057/11178829-man-s-feet-in-black-trousers-and-black-shoes.jpg?ver=6"
    }
  ]

}



