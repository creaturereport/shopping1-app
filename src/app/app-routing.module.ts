import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages of our application to be routed
import { HomeComponent } from './home/home.component';
import { TopsComponent } from './tops/tops.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  //routes for normal users
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "products", component: ProductsComponent},
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "check-out", component: CheckOutComponent },
  { path: "order-success", component: OrderSuccessComponent },
  { path: "login", component: LoginComponent },
  // Wildcard route for a 404 page
  { path: '**', component: PageNotFoundComponent },

  { path: "tops", component: TopsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
