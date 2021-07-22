import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { HatsComponent } from './hats/hats.component';
import { ShoesComponent } from './shoes/shoes.component';
import { PantsComponent } from './pants/pants.component';
import { WatchesComponent } from './watches/watches.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';

import { ProductsService } from './services/products.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShirtsComponent,
    HatsComponent,
    ShoesComponent,
    PantsComponent,
    WatchesComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
