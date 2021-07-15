import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopsComponent } from './tops/tops.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { HatsComponent } from './hats/hats.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopsComponent,
    BottomsComponent,
    HatsComponent,
    PageNotFoundComponent,
    ShoesComponent,
    AccessoriesComponent,
    BsNavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
