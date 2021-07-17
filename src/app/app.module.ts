import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopsComponent } from './tops/tops.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AccesoriesComponent } from './accesories/accesories.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HatsComponent } from './hats/hats.component';

import { ProductService } from "./services/productService/product-service.service"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopsComponent,
    BottomsComponent,
    ShoesComponent,
    AccesoriesComponent,
    NavBarComponent,
    HatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
