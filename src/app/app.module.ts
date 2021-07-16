import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { TopsComponent } from './tops/tops.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

=======
import { ShirtsComponent } from './shirts/shirts.component';
import { HatsComponent } from './hats/hats.component';
import { ShoesComponent } from './shoes/shoes.component';
import { PantsComponent } from './pants/pants.component';
import { WatchesComponent } from './watches/watches.component';
import { NavComponent } from './nav/nav.component';
>>>>>>> e29120dd32d710376ec4f8dd4feb837ce738dc0e

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
    TopsComponent,
    
    PageNotFoundComponent,
   
    BsNavbarComponent,
         ProductsComponent,
         ShoppingCartComponent,
         CheckOutComponent,
         OrderSuccessComponent,
         MyOrdersComponent,
         LoginComponent,
   
=======
    ShirtsComponent,
    HatsComponent,
    ShoesComponent,
    PantsComponent,
    WatchesComponent,
    NavComponent
>>>>>>> e29120dd32d710376ec4f8dd4feb837ce738dc0e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
