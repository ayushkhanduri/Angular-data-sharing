import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//import { OtherComponent } from './components/other.component';
//import {OtherModule} from './other/other.module';
import {SomeComponent} from './other/someComponent';

import {DataService} from './shared/data.service';


@NgModule({
  declarations: [
    AppComponent,
    SomeComponent
  ],
  imports: [
    BrowserModule
    //OtherModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
