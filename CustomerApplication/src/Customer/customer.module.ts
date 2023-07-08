import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerRoutes } from '../Routing/customer.routing';
import { CustomerComponent } from './customer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomerComponent],
  imports: [CommonModule, RouterModule.forChild(CustomerRoutes), FormsModule],
  providers: [],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}
