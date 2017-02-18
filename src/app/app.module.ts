import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import { routing }        from './app.routing';

import { AppComponent }  from './app.component';
import {LoginFormComponent} from "./login-form.component";
import {HomeComponent} from "./home.component";
import {MainNavComponent} from "./main-nav.component";
import {SecondPotComponent} from "./second-pot.component";
import {AuthService} from "./auth.service";

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {CommonModule} from "@angular/common";

@NgModule({
  imports:      [
    CommonModule,
    BrowserModule,
    FormsModule,
    routing,
    Ng2Bs3ModalModule
  ],
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    MainNavComponent,
    SecondPotComponent
  ],
  providers: [
    AuthService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
