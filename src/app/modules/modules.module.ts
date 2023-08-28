import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { IntroducaoComponent } from './home-page/components/introducao/introducao.component';


@NgModule({
  declarations: [
    HomePageComponent,
    IntroducaoComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule
  ]
})
export class ModulesModule { }
