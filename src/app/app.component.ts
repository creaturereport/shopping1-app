import { Component } from '@angular/core';
import { ProductsService } from 'src/shared/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productArray: any;
// tells Angular that at that time this component is instantiated
// the ProductService must be injected so that the service can become available.
  constructor(private productsService: ProductsService) {}

  getProducts() {
    this.productsService.getProducts().subscribe(products => 
      {this.productArray = products});
  }

  ngOnInit() {
    this.getProducts();
  }

  title = 'shopping1-app';
}

// The ProductService has been registered at the root level through the 
// @Injectable({ providedIn: ‘root }) which makes the service available for me
// to inject in the app.component.ts.
//