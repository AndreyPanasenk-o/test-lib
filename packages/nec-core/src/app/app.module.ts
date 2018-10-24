import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NecCoreLibModule } from 'nec-core-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NecCoreLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
