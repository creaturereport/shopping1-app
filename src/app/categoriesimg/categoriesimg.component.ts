import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoriesimg',
  templateUrl: './categoriesimg.component.html',
  styleUrls: ['./categoriesimg.component.css']
})
export class CategoriesimgComponent implements OnInit {

    //stock photos for category images
    jeanImg = 'https://img.merkandi.com/imgcache/800x600/offer/screenshot-2020-12-19-at-144613-1608389194-1608389199.png';
    shirtsImg = 'https://picjumbo.com/wp-content/uploads/woman-choosing-t-shirts-during-clothing-shopping-at-apparel-store-2-1080x720.jpg';
    accesoriesImg = 'https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80';
    shoesImg = 'https://media.istockphoto.com/photos/big-collection-of-different-sport-shoes-the-shop-window-is-filled-a-picture-id1070513074?k=6&m=1070513074&s=612x612&w=0&h=fwq5Hqmmc2D07oVqaKH01WmArf046ba9qjGl-KFr-5A=';
    socksImg = 'https://media.istockphoto.com/photos/pile-of-multicolored-socks-view-from-above-picture-id1069111848?k=6&m=1069111848&s=612x612&w=0&h=IvyQQ5QjxjUVibb5BxwpXHtoF8ouHESp7IqCKjEQS2M=';
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
