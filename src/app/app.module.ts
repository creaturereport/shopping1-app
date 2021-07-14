import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { TopsComponent } from './tops/tops.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AccesoriesComponent } from './accesories/accesories.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HatsComponent } from './hats/hats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShirtsComponent,
    TopsComponent,
    BottomsComponent,
    ShoesComponent,
    AccesoriesComponent,
    NavBarComponent,
    HatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
