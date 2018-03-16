import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductGuardService } from './product-guard.service';
import { SearchComponent } from '../search/search.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', canActivate: [ ProductGuardService ], component: ProductDetailComponent}
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    SearchComponent
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
