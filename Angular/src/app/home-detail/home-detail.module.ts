import { NgModule } from '@angular/core';
import { HomeDetailRoutingModule } from './home-detail.routing.module';
import { HomeDetailComponent } from './home-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule,HttpClientModule,HomeDetailRoutingModule],
  declarations: [HomeDetailComponent]
})
export class HomeDetailModule {}