import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header.component/header.component";
import {MaterialModule} from "@angular/material";
import {EntryComponent} from "./protected/entry-component/entry.component";
import {SignInComponent} from "./sign-in.component/sign-in.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntryComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
