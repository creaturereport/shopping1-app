import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShirtsComponent } from './shirts/shirts.component';
import {HatsComponent} from './hats/hats.component';
import { ShoesComponent } from './shoes/shoes.component';
import {PantsComponent} from './pants/pants.component';
import {AccessoriesComponent} from './accessories/accessories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "shirts", component: ShirtsComponent },
  {path: "hats", component: HatsComponent},
  {path: "shoes", component: ShoesComponent},
  {path: "pants", component: PantsComponent},
  {path: "accessories", component: AccessoriesComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "login", component: LoginComponent},
  {path: "profile", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
