import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { HatsComponent } from './hats/hats.component';
import { ShoesComponent } from './shoes/shoes.component';
import { PantsComponent } from './pants/pants.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShirtsComponent,
    HatsComponent,
    ShoesComponent,
    PantsComponent,
    AccessoriesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
