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

  hatsData: any = [
    {
       id: 1, 
      name: "Hat",
      price: "25.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJif0dYUsQ6JLotQ8PsHD8kdcTA5uVmYp-Q&usqp=CAU"
    },
    {
       id: 2, 
      name: "Hat",
      price: "25.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJif0dYUsQ6JLotQ8PsHD8kdcTA5uVmYp-Q&usqp=CAU"
    },
    {
       id: 3, 
      name: "Hat",
      price: "25.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJif0dYUsQ6JLotQ8PsHD8kdcTA5uVmYp-Q&usqp=CAU"
    },
    {
       id: 4, 
      name: "Hat",
      price: "25.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJif0dYUsQ6JLotQ8PsHD8kdcTA5uVmYp-Q&usqp=CAU"
    },
    {
       id: 5, 
      name: "Hat",
      price: "25.00",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJif0dYUsQ6JLotQ8PsHD8kdcTA5uVmYp-Q&usqp=CAU"
    },
  ]

}
