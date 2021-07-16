import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
//pages of our application to be routed
import { HomeComponent } from './home/home.component';
import { TopsComponent } from './tops/tops.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';


const routes: Routes = [
  //routes for normal users
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "products", component: ProductsComponent},
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "check-out", component: CheckOutComponent },
  { path: "order-success", component: OrderSuccessComponent },
  { path: "my-orders", component: MyOrdersComponent },
  { path: "login", component: LoginComponent },
  // Wildcard route for a 404 page
  { path: '**', component: PageNotFoundComponent },

  { path: "tops", component: TopsComponent },
=======
import { HatsComponent } from './hats/hats.component';
import { HomeComponent } from './home/home.component';
import { PantsComponent } from './pants/pants.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { ShoesComponent } from './shoes/shoes.component';
import { WatchesComponent } from './watches/watches.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "shirts", component: ShirtsComponent },
  { path: "hats", component: HatsComponent },
  { path: "shoes", component: ShoesComponent },
  { path: "pants", component: PantsComponent },
  { path: "watches", component: WatchesComponent }
>>>>>>> e29120dd32d710376ec4f8dd4feb837ce738dc0e
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
