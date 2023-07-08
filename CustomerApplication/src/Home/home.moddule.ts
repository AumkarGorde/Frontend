import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeRoutes } from '../Routing/home.routing';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(HomeRoutes), FormsModule],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
