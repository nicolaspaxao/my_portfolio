import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { AboutPageComponent } from './modules/about-page/about-page.component';
import { PortfolioPageComponent } from './modules/portfolio-page/portfolio-page.component';
import { WorkPageComponent } from './modules/work-page/work-page.component';
import { ContactPageComponent } from './modules/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    PortfolioPageComponent,
    WorkPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
