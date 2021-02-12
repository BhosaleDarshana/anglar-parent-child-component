import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './childComponent.component';
import { courseComponent } from './courses.component';
import { laptopComponent } from './laptop.component';
import { mobileComponent } from './mobile.component';
import { ParentComponent } from './parentComponent.componet';
import { productButtonComponent } from './product.component';
import { switchButtonComponent } from './switchButton.component';
import { tvComponent } from './tv.component';
import { twitterComponent } from './twitter.component';
import { twitterparentComponent } from './twitterParent.component';

@NgModule({
  declarations: [
    AppComponent,
    twitterComponent,
    twitterparentComponent,
    ParentComponent,
    ChildComponent,
    courseComponent,
    switchButtonComponent,
    productButtonComponent,
    laptopComponent,
    mobileComponent,
    tvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
