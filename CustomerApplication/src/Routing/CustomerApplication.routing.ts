import { CustomerComponent } from 'src/Customer/customer.component';
import { HomeComponent } from 'src/Home/home.component';
import { SupplierComponent } from 'src/Supplier/supplier.component';

export const MainRoutes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Customer', component: CustomerComponent },
  { path: 'Supplier', component: SupplierComponent },
];
