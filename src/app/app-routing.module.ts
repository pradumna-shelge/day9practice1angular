import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent ,
  children: [
    { path: 'detail/:id', component: ProductDetailComponent,
  children:[
    { path: 'overview', component: ProductOverviewComponent },
    { path: 'spec', component: ProductSpecComponent },  
    { path: '', redirectTo:'overview', pathMatch:"full" }
  ] },

 ],},
  
  {path:'**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
