import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { HatsComponent } from './hats/hats.component';
import { ShoesComponent } from './shoes/shoes.component';
import { PantsComponent } from './pants/pants.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShirtsComponent,
    HatsComponent,
    ShoesComponent,
    PantsComponent,
    AccessoriesComponent,
    NavbarComponent,
    CheckoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
