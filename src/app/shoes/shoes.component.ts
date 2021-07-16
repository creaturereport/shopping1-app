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

  shoesData: any = [
    {
       id: 1, 
      name: "Sneakers",
      price: "120.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcuecV7DfF2yiQZk0aWPCAGf7yeapUcgMxA&usqp=CAU"
    },
    {
       id: 2, 
      name: "Socks",
      price: "5.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToEP8FqnEvUkd59rlWLVgLqIXkFFISbC1nWfFlOVzZdr78x5HD2xmI4wXyBYh_FZ6Glg3BwtQ&usqp=CAc"
    },
    {
       id: 3, 
      name: "Sneakers",
      price: "120.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcuecV7DfF2yiQZk0aWPCAGf7yeapUcgMxA&usqp=CAU"
    },
    {
       id: 4, 
      name: "Socks",
      price: "5.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToEP8FqnEvUkd59rlWLVgLqIXkFFISbC1nWfFlOVzZdr78x5HD2xmI4wXyBYh_FZ6Glg3BwtQ&usqp=CAc"
    },
    {
       id: 5, 
      name: "Sneakers",
      price: "120.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcuecV7DfF2yiQZk0aWPCAGf7yeapUcgMxA&usqp=CAU"
    },
    {
       id: 6, 
      name: "Socks",
      price: "5.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToEP8FqnEvUkd59rlWLVgLqIXkFFISbC1nWfFlOVzZdr78x5HD2xmI4wXyBYh_FZ6Glg3BwtQ&usqp=CAc"
    },
  ]

}
