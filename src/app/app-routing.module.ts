import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
