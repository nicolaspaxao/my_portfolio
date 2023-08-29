import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { WorkingComponent } from './working/working.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WorkingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    WorkingComponent
  ]
})
export class SharedModule { }
