import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottoms',
  templateUrl: './bottoms.component.html',
  styleUrls: ['./bottoms.component.css']
})
export class BottomsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bottomsData: any = [
    {
      id: 1, 
      name: "Pant",
      price: "40.50",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmVDrWDGbh2lJO2XSOsidOUpVzwBtaisANA&usqp=CAU"
    },
    {
      id: 2, 
      name: "Other pants",
      price: "39.99",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmVDrWDGbh2lJO2XSOsidOUpVzwBtaisANA&usqp=CAU"
    },
    {
      id: 3, 
      name: "More Pants",
      price: "51.99",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmVDrWDGbh2lJO2XSOsidOUpVzwBtaisANA&usqp=CAU"
    },
  ]

}
