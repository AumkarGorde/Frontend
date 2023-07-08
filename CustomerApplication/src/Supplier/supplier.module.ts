import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupplierRoutes } from '../Routing/supplier.routing';
import { SupplierComponent } from './supplier.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SupplierComponent],
  imports: [CommonModule, RouterModule.forChild(SupplierRoutes), FormsModule],
  providers: [],
  bootstrap: [SupplierComponent],
})
export class SupplierModule {}
