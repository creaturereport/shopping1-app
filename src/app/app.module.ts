import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { CategoriesimgComponent } from './categoriesimg/categoriesimg.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CategoriesimgComponent
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
