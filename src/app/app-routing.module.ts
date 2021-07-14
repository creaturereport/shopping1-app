import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopsComponent } from './tops/tops.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AccesoriesComponent } from './accesories/accesories.component';
import { HatsComponent } from './hats/hats.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "tops", component: TopsComponent },
  {path: "bottoms", component: BottomsComponent },
  {path: "shoes", component: ShoesComponent },
  {path: "accesories", component: AccesoriesComponent },
  {path: "hats", component: HatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
