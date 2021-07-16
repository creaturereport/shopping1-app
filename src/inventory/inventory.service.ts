import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  getShoes(): Observable<any>{
    let styleShoes = [
      {
        id: 1, 
        name: "Adidas",
        price: "80.00",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZXf819Vg-c28DmDWyaHWJtRcgvNFfCC6eA&usqp=CAU"
      },
      {
        id: 2, 
        name: "Reebox",
        price: "80.00",
        image_url:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTmpu0CvIjr0DcLEeqjIBiXtN99pgdUkSmPnnNjeVqTiTtCNdjwz5tsraIivIjWBSLba3O767ZeJswT98vF3BZHIQ01R5UYak4eX7GJMI6A1AsSnJ_GM17wwg&usqp=CAE"
      },
      {
        id: 3, 
        name: "Yeezy's",
        price: "80.00",
        image_url: "https://sneakernews.com/wp-content/uploads/2019/05/adidas-yeezy-boost-350-v2-fu9161-9.jpg?w=540&h=380&crop=1"
      },
      {
        id: 4, 
        name: "Timberland",
        price: "80.00",
        image_url: "https://pyxis.nymag.com/v1/imgs/a21/ecb/da924ea13eca9c02446823fed213a52bbb-work-boots-01.2x.rsquare.w600.jpg"
      }
    ];
    
    return of(styleShoes);
  }
  getShirts(): Observable<any>{
    let styleShirts = [
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
    ];
    return of (styleShirts);
  }
  getPants(): Observable<any>{
    let stylePants = [
      {
        id: 1, 
        name: "Jeans",
        price: "80.00",
        image_url: "https://cdn.shopify.com/s/files/1/0258/9160/2490/products/E9CD23D6-1868-47B1-8798-84E60D0D6037_1163x1163.png?v=1595429278"
      },
      {
        id: 2, 
        name: "Khakis",
        price: "80.00",
        image_url:"http://cdn.shopify.com/s/files/1/0071/5633/4681/products/Men_All-Mountain-Pant_Relaxed-Fit_Yellowstone_209_1024x1024.jpg?v=1592915414"
      },
      {
        id: 3, 
        name: "Slacks",
        price: "80.00",
        image_url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEQ8SDw0PEA0PDw8QDw4NDQ8ODQ0QFREWFhURFRUYHTQgGBolGxUTITEhJSkrLi4uFx8zRDMtNygtLisBCgoKDQ0NEg0NDjcZFRkrKysrKysrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwIEBQYHCAH/xABKEAABAwICBAYNBwoHAAAAAAAAAQIDBBEFByFRkcEGEjFhcYETIiUyQVKSoaKjsbPRNWJjZHJ0wiMkNEJTc6SytMMVM0NEhOLw/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAW9fMscUr0tdjHORF5FVE0IvWBp3CvMqlo3vhijdU1Maq17Wu7HDE7xXPtpXmRF6jTZ81sRcq8SKljb4E7FI9yaNavsuw0CWRXve9Xq9Xve9ZHp20iucqq9edb36yVie1ebwhW4uzJxVeSeNPs08e9CJcxsWun503Sq/7eDV9k1a3TtUpc21lte1/CBtsWZeK2us8a9NPFuQlbmdiifrwL006blNMZGiIVcTp2qBu8WbGItVONHSPbfSnYpWuXoVH6NhvHA/MWlr3Nie1aard3sb3caOVU8Eb/AArzKiL0nC5E59Fy3erk0scrXppY9iq17HJpRyKmlFRbLdAPWALXCqtJoIJUW6TQxyIqcnbsR28uggAAAAAAAAAAAAAAAAAAAAAAAAYXhnUJHh9c5XcW1NKjXJyo9Wq1tufjKhmjSc4JuLhkiX/zJoGrzoj+P+ADhkaE6Fsx11sq2W10Tk0Fw1P/ACBpWUP0IVlE3IoFYVCqwUIgUhkQmc3b1kD0XpCvROXUyPwugVq3RtO2NfBZY7sVOpWqbGc9yTq1fQSsX/RqpGtTU1zGP/mc86EGQAAAAAAAAAAAAAAAAAAAAAAAA59nVJaigb49Yy/QkUq/A6Cc6zs/RKX73/ZkA46jdN/DrJWlLEKkQNCKJk0dbfahRcke7tetPagEinw+BAilxC5Cd6ET0Cur5HO/JVqapol2sVNx045Zka7RXpz0y7Ul+B1MMgAAAAAAAAAAAAAAAAAAAAAAABzrOz9Epfvf9mQ6Kc+zpb+Z066qtvnhlA48xCtWiNCoKgcRSPsik8iFjWLYKu2SXJmFlTGQagFKoRvQlcRu5AOl5HL22IdFJ7ZjqxyjI/v6/wCzS+2Y6uGQAAAAAAAAAAAAAAAAAAAAAAAA0fOBl8PRfFqYV8zk3m8GoZrMvhk3zZKdfXNTeBxCNCuxTGVBpbvXSWGJaEuX8nKpY16XavQoRc0zNCdRf2IKePtW9CewuHKFROQjfyE0hE8Dp+SEeivdrdTN2JIv4jqJzrJOK1LVO8aq4vkxMX8R0UMgAAAAAAAAAAAAAAAAAAAAAAABq+ZjL4ZV8yQrsnjU2g1/h8y+HVqaoVXyVRdwHAoyVqEcZK0KtJ+VeksMQ71ddlMjP3yllVRcZrk8KoqJ1gZiph7G98f7N72eS5U3EZkeEsfFrKxuqpmT01McBTIRPJHkbgrtWUEPFw5HftKiZ/TZUZ+A3Y1nLaHiYZSJ4zZH+VK9282YMgAAAAAAAAAAAAAAAAAAAAAAABh+GLb0Fcn1WfzRqpmDHcI2cajrE10tQnqnAedIiZCCJSZAq1n75T5TpeSNvjSRt2uRCqp75er2FeENvVUbfGq6Vu2ZiAZzhklq+t+8P3GGQzPDf5Rrv36/yoYRigJCFykkykD15egD0ZwNj4uH0CfVKdV6VjRV9pmSywWPiU1M3xYIW7I0QvQgAAAAAAAAAAAAAAAAAAAAAAAAW+Is40Mya4pE2tUuCmRt0VNaKnmA8xQcidCEyKQQ6ETmRCW4VFOl3L1ewvODEfGr8PT67Srsmau4s5uXqQy/AePjYlQJ9YRfJartwE3DxbYnXJ9M3zxMUwjDM5gL3Vr0+lj9xGph2AUTKQSci9C+wklXSSUUfGkib40kbdrkQK9OQs4rWp4rUTYlisAMgAAAAAAAAAAAAAAAAAAAAAAAAAA8yTttJI3xZHpscqAlxNtqqqTVU1CbJXIRBVD+XqM1l/pxWgT6STzQSGGdy9SGZy604tQ/bmX+HkCvmYad18Q/eQ/00Rh2GZzIS2L1/wBqn/pYTDxpoCLd/fL0l5gjb1VImuqp09a0tlTSvOpe8G23raJNdZTe+aB6UAAQAAAAAAAAAAAAAAAAAAAAAAAAAAHm7H2Wra5NVbV7Ozvt5i1MnwyZxcRrk+syL5S33mNuFUSbjNZZJfF6Tm7Ov8PIYWXcZ/K1t8Wpl1NqPcPApzMb3Wredaf+miTcYNvIZ/M9O6tVzpT+4YYBoET/AA9JkeCCXxCgT63Aux6LuLB/h6zJ8A23xKhT6dF2NVdwHowABAAAAAAAAAAAAAAAAAAAAAAAAAAAefcwW2xOtT6Vi7YmLvMMZ7M5tsVqufsDvUMNfR2gKjnX2Gy5SpfFIOaKdfVqm81SodpRDbsn9OKM5qedf5U3gfc0m91KjnZAvqmpuNaYps+a2jFJeeKBfQsawjdQFEnh6zNZbtvilD+8lXZBIphH+E2LK1t8VpeZJ19Q9N4HfwAEAAAAAAAAAAAAAAAAAAAAAAAAAABwjNltsTl+dDA70LbjVGqbjnG22JJ86khX05U3GmIFQ1C6eo3LJr5T/wCLOvpRmlVC6eo3XJb5TX7nOvrIviBXm2lsTfzwQL5nfA1Zrja84k7pdNLAvpSJuNPjcAkdy9ZtOUbb4nF82GdfRtvNSkdym5ZMpfEl5qSdfTiTeB3UABAAAAAAAAAAAAAAAAAAAAAAAAAAAcUzrZavgXxqNqbJZPiaIh0HPJtqmjdrgkTyZP8Asc8RQsQTLp6jeMk/lN/NRT+9hNGlXSpvWSKd0pPuM3voAJc5k7pM+5w+8lNLQ3bOlLYhEuuji97KaO1QI5XaTe8km3xCVdVDL55oTn8q6V6To+RjPzuqdqpUTypUX8IHaQAEAAAAAAAAAAAAAAAAAAAAAAAAAAByDPdv5XD11x1SbHQ/E5mi6DsecfB+qq0o30tO+bsK1CSJGreM1H9jsvFVbr3i8lzk8+DVkeiSiqmfappkTbYKxsnKpv2Ryd0Zl1UMvvoTSP8ADaly2bS1Dl1Mp5XLsRDpmTXB+sgqppqikmhidTOja6ZnY1c5ZGLZGr23I1fABYZ3aK+Dno2e9lNCjcdRzi4P1lRUwTU9LLNE2n7G5YW8dWuSRzrK1NPI7Uc2dhdUzQ+kqWL8+mmb7WgWD10r0qdNyHT8vXLqhgTa9/wOex4TVSLaOjqXrf8AUppnexp1rJrg9WUi1klVTvhbM2BsaScVHu4qyK7tb3Tvm8tgOmgAIAAAAAAAAAAAAAAAAAAAAAAAAAAD4p9AAHwAAfQAB8QAD6AAAAAAAAAAAAAAAD//2Q=="
      },
      {
        id: 4, 
        name: "Joggers",
        price: "80.00",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeZfw6NXLoF9xKo43aDvvqaqlqv8TGAvupQ&usqp=CAU"
      }
    ];
    return of (stylePants);
  }
  getAccessories(): Observable<any>{
    let styleAcc = [
      {
        id: 1, 
        name: "Apple Watch",
        price: "80.00",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_EIHk9I1TsBb34avm4KEEHbbz1GSgL9uaJA&usqp=CAU"
      },
      {
        id: 2, 
        name: "Rolex",
        price: "80.00",
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BQvA1JxqwOIBnNo2tMnpqUQO9ISEs7u8Dw&usqp=CAU"
      },
      {
        id: 3, 
        name: "Trust-Bracelet",
        price: "80.00",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/51FuYtZeUdL._AC_SL1000_.jpg"
      },
      {
        id: 4, 
        name: "Gucci Belt",
        price: "80.00",
        image_url: "https://i0.wp.com/mostexpensivelists.com/wp-content/uploads/2014/10/Gucci-Men%E2%80%99s-belt.jpg"
      }
    ];
    return of(styleAcc);
  }
  getHats(): Observable<any>{
    let styleHats = [
      {
        id: 1, 
        name: "Fitted Cap",
        price: "80.00",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxfFwEKGCmlWGwc2JlF0Yh0bGhgSeG7dGjQ&usqp=CAU"
      },
      {
        id: 2, 
        name: "Casino Cap",
        price: "80.00",
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS687nIgmTMh2p_gwu-3tk4PSlfgt-z17DdmJllO2BefyOmkLEupZbyt3iiQEtGptL0Gt_T7Ds&usqp=CAc"
      },
      {
        id: 3, 
        name: "Bucket Hat",
        price: "80.00",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/81K0IZapQGL._AC_UX385_.jpg"
      },
      {
        id: 4, 
        name: "Celcius Hat",
        price: "80.00",
        image_url: "https://icetrek.com/uploads/products/Hats-and-Mitts/Hat/_1200x630_fit_center-center_82_none/Icetrek-Celsius-Hat.jpg?mtime=1525594540"
      }
    ];
    return of (styleHats);
  }
  getCategories(): Observable<any>{
    let eachItem = [
      {
        id: 1,
        name: "Shirts & Tops",
        description: "So much quality you'll upgrade from 'T' to 'U'-shirts", 
        image_url: "http://dslv9ilpbe7p1.cloudfront.net/2sSplo-LPaO5x1QAc3__LA_store_banner_image.jpeg",
        portal: "/shirts"

      },
      {
        id: 2,
        name: "Pants",
        description: "Skinny, casual, daily, you name it",
        image_url: "https://thumbs.dreamstime.com/b/pants-display-shelf-fashion-store-47119433.jpg",
        portal: "/pants"
      },
      {
        id: 3,
        name: "Shoes",
        description: "Kicks aren't just for kids",
        image_url: "https://i0.wp.com/www.militaryprintables.com/wp-content/uploads/2019/01/Depositphotos_190807560_l-2015.jpg?ssl=1",
        portal: "/shoes"
      },
      {
        id: 4,
        name: "Headwear",
        description: "Stylish and comfortable.",
        image_url: "http://baltimore.cbslocal.com/wp-content/uploads/sites/15910056/2012/04/shopping-style-hats-hats-in-the-belfry.jpg",
        portal: "/hats"
      },
      {
        id: 5,
        name: "Accessories",
        description: "Watches, Belts, Bracelets and more",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMnu7TXI4P9FPk_l2r1yegpyi8XBv_5wl2g&usqp=CAU",
        portal: "/accessories"
      }
    ];
    return of (eachItem);
  }
  
}
