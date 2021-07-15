import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { HatsComponent } from './hats/hats.component';
import { HomeComponent } from './home/home.component';
import { ShoesComponent } from './shoes/shoes.component';
import { PantsComponent } from './pants/pants.component';
import { ShirtsComponent } from './shirts/shirts.component';



const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "shirts", component: ShirtsComponent },
  {path: "pants", component: PantsComponent },
  {path: "hats", component:HatsComponent},
  {path: "shoes", component:ShoesComponent},
  {path: "accessories", component: AccessoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,ShirtsComponent,PantsComponent,HatsComponent,AccessoriesComponent]
