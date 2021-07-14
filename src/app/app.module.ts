import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { VerifyComponent } from './verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShirtsComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
