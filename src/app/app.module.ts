import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCurrencyPipe } from './my-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyCurrencyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
