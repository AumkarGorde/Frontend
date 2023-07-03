import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterComponent } from './Master/master.component';
import { MainRoutes } from './Routing/CustomerApplication.routing';
import { CustomerComponent } from './Customer/customer.component';
import { SupplierComponent } from './Supplier/supplier.component';
import { HomeComponent } from './Home/home.component';

@NgModule({
  declarations: [
    MasterComponent,
    CustomerComponent,
    SupplierComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(MainRoutes), FormsModule],
  providers: [],
  bootstrap: [MasterComponent],
})
export class AppMainModule {}
