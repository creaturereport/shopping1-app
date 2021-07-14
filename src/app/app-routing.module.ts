import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopsComponent } from './tops/tops.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { HatsComponent } from './hats/hats.component';
import { ShoesComponent } from './shoes/shoes.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "tops", component: TopsComponent },
  { path: 'bottoms', component: BottomsComponent },
  { path: 'hats', component: HatsComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
