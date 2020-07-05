import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Product } from './components/products/model/product.model';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "products/create",
    component: ProductsCreateComponent
  },
  {
    path: "products/update",
    component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
