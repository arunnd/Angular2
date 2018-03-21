import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';

const PRODUCTS_ROUTES: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', canActivate: [ ProductGuardService ], component: ProductDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(PRODUCTS_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingMoudle {
}