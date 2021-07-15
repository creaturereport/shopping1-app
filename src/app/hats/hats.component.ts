import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hats',
  templateUrl: './hats.component.html',
  styleUrls: ['./hats.component.css']
})
export class HatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  styleHats: any = [
    {
      id: 1, 
      name: "GME Baseball Cap",
      price: "30.00",
      image_url: "https://i.etsystatic.com/25543253/r/il/29e54b/2883385307/il_794xN.2883385307_89bj.jpg"
    }, 
    {
       id: 2,
      name: "Sun Hat",
      price: "20.00",
      image_url: "https://media.istockphoto.com/photos/straw-largerimmed-beach-hat-on-a-white-background-picture-id153829776?k=6&m=153829776&s=612x612&w=0&h=gDZAJbBDNrtMOK6WGSUAQ82OJP67BR1oR9j-Drlh68o="
    }, 
    {
       id: 3, 
      name: "NY Fitted Cap",
      price: "35.00",
      image_url: "https://cdn11.bigcommerce.com/s-6x1f4p/images/stencil/500x659/products/3604/19798/40648__51001.1621287274.JPG?c=2"
    }, 
    {
       id: 4, 
      name: "Dior x Jordan Wings Bucket Hat",
      price: "1300",
      image_url: "https://images.stockx.com/products/streetwear/Dior-x-Jordan-Wings-Bucket-Hat-Navy.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1603481985"
    }
  ]

}
