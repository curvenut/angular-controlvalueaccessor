import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Hello1Component } from './components/hello1/hello1.component';
import { Hello2Component } from './components/hello2/hello2.component';

@NgModule({
  declarations: [
    AppComponent,
    Hello1Component,
    Hello2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
