import { Injectable } from '@angular/core';

//to utilize Observables
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  //hard-coding fake data, but in reality this would be fetched from API server

  getProducts(): Observable<any> {
    let productTops = [
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
      }, 
      {
         id: 5, 
        name: "Shorts",
        price: "30.00",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3ECe-nEFOYUpEi1K1NqTivc12t7fo2lb5T25Rv-kVXitaI5RA6xo15SlR-Y0kMwriuBximM&usqp=CAc"
      }, 
      {
         id: 6, 
        name: "Hat",
        price: "25.00",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJif0dYUsQ6JLotQ8PsHD8kdcTA5uVmYp-Q&usqp=CAU"
      }, 
      {
         id: 7, 
        name: "Sneakers",
        price: "120.00",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcuecV7DfF2yiQZk0aWPCAGf7yeapUcgMxA&usqp=CAU"
      },
      {
         id: 8, 
        name: "Pant",
        price: "40.50",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmVDrWDGbh2lJO2XSOsidOUpVzwBtaisANA&usqp=CAU"
      },
      {
         id: 9, 
        name: "Watch",
        price: "180.00",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOF4WuAz2_Jlm0daJ9ap0HoIGyBfIgN3bnA&usqp=CAU"
      },
      {
         id: 10, 
        name: "Socks",
        price: "5.00",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToEP8FqnEvUkd59rlWLVgLqIXkFFISbC1nWfFlOVzZdr78x5HD2xmI4wXyBYh_FZ6Glg3BwtQ&usqp=CAc"
      }
    ];
    // the of() function is an Observable that will emit variable amount of values in a 
    //  sequence and then emits a complete notification
    // The of([…]) returns an observable that emits a single value which in our case is an array of our products
    return of(productTops);
  }
}
