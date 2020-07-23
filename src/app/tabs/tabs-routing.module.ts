import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'customers',
        loadChildren: () => import('../customers/customers.module').then(m => m.CustomersPageModule)
      },
      {
        path: 'addcustomer',
        loadChildren: () => import('../add-customer/add-customer.module').then(m => m.AddCustomerPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/customers',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/customers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
