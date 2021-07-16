import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  styleAcc: any = [
    {
      id: 1, 
      name: "Watch",
      price: "80.00",
      image_url: "https://museumstore.sfmoma.org/pub/media/catalog/product/cache/8f9f1f8ced9c69a11b1ca2f7e0b91136/s/0/s001b-watch-1_1000x1000_72.jpg"
    }, 
    {
       id: 2,
      name: "Necklace",
      price: "100.00",
      image_url: "https://st2.depositphotos.com/1192512/7485/v/600/depositphotos_74851229-stock-illustration-many-chains-golden-metallic-necklace.jpg"
    }, 
    {
       id: 3, 
      name: "Gold Wedding Ring",
      price: "85.00",
      image_url: "https://static3.depositphotos.com/1001806/137/i/600/depositphotos_1372751-stock-photo-gold-wedding-rings.jpg"
    }, 
    {
       id: 4, 
      name: "Gold Braclet",
      price: "200.00",
      image_url: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/p/f/pf34b01g_2.jpg?rnd=20200526195200"
    }
  ]

}



