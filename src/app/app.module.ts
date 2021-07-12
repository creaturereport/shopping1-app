import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BannerComponent } from './banner/banner.component';
import { CategoriesimgComponent } from './categoriesimg/categoriesimg.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> a6f7ca1aaeeb8e35e259da48d658c248aa63ed60

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    BannerComponent,
    CategoriesimgComponent
=======
    HomeComponent
>>>>>>> a6f7ca1aaeeb8e35e259da48d658c248aa63ed60
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
