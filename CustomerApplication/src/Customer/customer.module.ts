import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutes } from '../Routing/customer.routing';
import { CustomerComponent } from './customer.component';
import { GridComponent } from 'src/UserControl/grid.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerInterceptor } from '../Utility/CustomerApp.http.interceptor';

@NgModule({
  declarations: [CustomerComponent, GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomerInterceptor, multi: true },
  ],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}
