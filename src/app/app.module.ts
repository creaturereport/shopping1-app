import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InventoryService } from '../inventory/inventory.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    OpenCloseComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
