import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesories',
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.css']
})
export class AccesoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  accesoriesData: any =[
    {
       id: 1, 
      name: "Watch",
      price: "180.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOF4WuAz2_Jlm0daJ9ap0HoIGyBfIgN3bnA&usqp=CAU"
    },
    {
       id: 2, 
      name: "Watch",
      price: "180.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOF4WuAz2_Jlm0daJ9ap0HoIGyBfIgN3bnA&usqp=CAU"
    },
    {
       id: 3, 
      name: "Watch",
      price: "180.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOF4WuAz2_Jlm0daJ9ap0HoIGyBfIgN3bnA&usqp=CAU"
    },
    {
       id: 4, 
      name: "Watch",
      price: "180.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOF4WuAz2_Jlm0daJ9ap0HoIGyBfIgN3bnA&usqp=CAU"
    },
  ]

}
