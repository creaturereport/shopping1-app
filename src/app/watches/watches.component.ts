import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  watchStyles: any = [
    {
      id: 9, 
     name: "Watch",
     price: "180.00",
     image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOF4WuAz2_Jlm0daJ9ap0HoIGyBfIgN3bnA&usqp=CAU"
   },
  ]

}
