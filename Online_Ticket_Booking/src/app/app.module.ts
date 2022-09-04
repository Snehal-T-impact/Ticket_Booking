import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { OneComponent } from './one/one.component';
import { ViewChildernComponent } from './view-childern/view-childern.component';
import { ReusableComponent } from './reusable/reusable.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    ViewChildComponent,
    OneComponent,
    ViewChildernComponent,
    ReusableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
