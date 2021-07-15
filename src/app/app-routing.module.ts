import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages of our application to be routed
import { HomeComponent } from './home/home.component';
import { TopsComponent } from './tops/tops.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "tops", component: TopsComponent },
  // Wildcard route for a 404 page
  { path: '**', component: PageNotFoundComponent },  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
