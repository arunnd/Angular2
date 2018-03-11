import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductGuardService } from './product-guard.service';

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
    ConvertToSpacesPipe
    
  ],
  providers: [ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
