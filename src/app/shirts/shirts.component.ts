import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

  constructor() { 
    console.log(this.styleShirts)
  }

  ngOnInit(): void {
  }
  
  styleShirts: any = [
    {
      id: 1, 
      name: "Jersey",
      price: "80.00",
      image_url: "https://cdn.shopify.com/s/files/1/0264/0225/8995/products/USASMZ2006_A.jpg?v=1591293163"
    }, 
    {
       id: 2,
      name: "Hoodie",
      price: "50.00",
      image_url: "https://i1.adis.ws/i/easton/M10HOODIE_ATHLETICHEATHER_01/M10TECHFLEECEHOODIE-ATHLETICHEATHER?$large$"
    }, 
    {
       id: 3, 
      name: "Long-Sleeve",
      price: "30.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbWLxw63leFHeHPwSY-Eyqhk1yYla2AkjVd55JPZIJsLqlWL6SdGwWOqMKqvEXhWa2r92urg&usqp=CAc"
    }, 
    {
       id: 4, 
      name: "T-Shirt",
      price: "25.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhMTDsVj2pDUUDCFWe_gHluKmsXEU6W28cQ&usqp=CAU"
    }
  ]

  
}
