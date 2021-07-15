import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

  constructor() {
    console.log(this.pantsList)
   }

  ngOnInit(): void {
  }
  pantsList: any = [
    {​
      id: 5, 
      name: "Shorts",
      price: "30.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3ECe-nEFOYUpEi1K1NqTivc12t7fo2lb5T25Rv-kVXitaI5RA6xo15SlR-Y0kMwriuBximM&usqp=CAc"
    },
    {​
      id: 8, 
      name: "Pant",
      price: "40.50",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmVDrWDGbh2lJO2XSOsidOUpVzwBtaisANA&usqp=CAU"
    }​
  ]    

}
