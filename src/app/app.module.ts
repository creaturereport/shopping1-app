import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { UserLitComponent } from './user-list/user-lit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentListComponent,
    UserLitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
