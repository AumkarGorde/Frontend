import { Routes } from '@angular/router';

export const MainRoutes: Routes = [
  {
    path: 'Home',
    loadChildren: () =>
      import('../Home/home.moddule').then((x) => x.HomeModule),
  },
  {
    path: 'Customer',
    loadChildren: () =>
      import('../Customer/customer.module').then((x) => x.CustomerModule),
  },
  {
    path: 'Supplier',
    loadChildren: () =>
      import('../Supplier/supplier.module').then((x) => x.SupplierModule),
  },
];
