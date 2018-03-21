import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // const id = +route.url[1].path;
    let id = +route.paramMap.get('id');
    if (isNaN(id) || id < 1) {
      alert('Invalid product Id');
      this._router.navigate(['/productMod/products']);
      return false;
    }
    return true;
  }
}

