import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutes } from '../Routing/customer.routing';
import { CustomerComponent } from './customer.component';
import { GridComponent } from 'src/UserControl/grid.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomerComponent, GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}
