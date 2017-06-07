import { BuyProductComponent } from './buy-product/buy-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'buy-Product', component: BuyProductComponent },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
