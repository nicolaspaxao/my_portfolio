import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { AboutPageComponent } from './modules/about-page/about-page.component';
import { PortfolioPageComponent } from './modules/portfolio-page/portfolio-page.component';
import { WorkPageComponent } from './modules/work-page/work-page.component';
import { ContactPageComponent } from './modules/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'work', component: WorkPageComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
