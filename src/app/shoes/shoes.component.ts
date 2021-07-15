import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  styleHats: any = [
    {
      id: 1, 
      name: "Ladies Running Sport Shoes",
      price: "40.00",
      image_url: "https://sc04.alicdn.com/kf/Hb9a0d4b43caa489dba71f4c87e7c7fba4.jpg"
    }, 
    {
       id: 2,
      name: "Men's Casual Shoe",
      price: "50.00",
      image_url: "https://www.looksgud.in/upload/item-image/1588/y20r/y20r-buckaroo-fenton-bordo-men-s-slip-on-casual-shoes_500x500_0.jpg"
    }, 
    {
       id: 3, 
      name: "Dior x Air Jordan 1 High",
      price: "8,951.00",
      image_url: "https://ns.imgix.net/product/1612896118401_DiorxAirJo0.jpeg?fit=fill&bg=FFFFFF&trim=color&auto=format,compress&q=90&h=400"
    }, 
    {
       id: 4, 
      name: "Men's Under Armor Shoe",
      price: "70.00",
      image_url: "https://images-na.ssl-images-amazon.com/images/I/41UacCTmq7S.jpg"
    }
  ]


}
