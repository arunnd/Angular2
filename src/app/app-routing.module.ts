import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

const APP_ROUTES: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'productMod', loadChildren: './products/product.module#ProductModule' },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}