import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
//import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    showUser: boolean = false;
    errorMessage: string;
    selectedId: number;

   _listFilter: string;
   get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];
    public users;


    /*onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }*/
    constructor(private _productService: ProductService) {
       // this.filteredProducts= this.products;
        //this.listFilter= 'cart';
    }
    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        this.showUser = false;
        return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    getUserDetails(id: number): void {
        this.selectedId = id;
        this._productService.getUserDetails(id)
          .subscribe(users => {
              this.users = users;
          },
          error => this.errorMessage = <any>error);
        this.showUser = true;
    }


    addUserDetails(): void {
        var user = {
          name: 'dd',
          username: 'ddd',
          email: 'dd@dd.com',
          phone: '123'
        };
        this._productService.addUserDetails(user)
          .subscribe(users => {
              this.users.push(users);
          },
          error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        console.log('oninit');
        
    this._productService.getProducts()
                .subscribe(products => {
                    this.products = products;
                    this.filteredProducts = this.products;
                },
                    error => this.errorMessage = <any>error);
    }
    onRatingClicked(message: string): void{
        this.pageTitle= 'Product List '+ message;
    }
}