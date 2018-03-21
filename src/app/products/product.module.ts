import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingMoudle } from './product-routing.module';
import { SearchComponent } from '../search/search.component';

@NgModule({
  imports: [ 
    SharedModule,
    ProductsRoutingMoudle
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
