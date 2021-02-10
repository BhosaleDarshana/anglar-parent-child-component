import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { twitterComponent } from './twitter.component';
import { twitterparentComponent } from './twitterParent.component';

@NgModule({
  declarations: [
    AppComponent,
    twitterComponent,
    twitterparentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
