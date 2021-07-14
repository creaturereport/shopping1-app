import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShirtsComponent } from './tops/tops.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { HatsComponent } from './hats/hats.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AccessoriesComponent } from './accessories/accessories.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShirtsComponent,
    BottomsComponent,
    HatsComponent,
    PagenotfoundComponent,
    ShoesComponent,
    AccessoriesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
