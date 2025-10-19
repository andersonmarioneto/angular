import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { Navbar } from './_components/navbar/navbar';
import { Footer } from './_components/footer/footer';
import { BaseUi } from './_components/base-ui/base-ui';
import { Users } from './pages/users/users';

@NgModule({
  declarations: [
    App,
    Home,
    Navbar,
    Footer,
    BaseUi,
    Users,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
