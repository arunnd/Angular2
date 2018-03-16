import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

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
    errorMessage: string;
    selectedId: number;

   _listFilter: string;
   get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.listFilter ? this.performFilter(this.listFilter) : this.filteredProducts = this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];
    public users;
    public rating;

    constructor(private _productService: ProductService) { }

    performFilter(filterBy: string): void{
        filterBy = filterBy.toLocaleLowerCase();
        this.filteredProducts = this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('oninit');
        //1. direct get and subscribe
        this._productService.getProducts()
                .subscribe(products => {
                    this.products = products;
                    this.filteredProducts = this.products;
               },
                    error => this.errorMessage = <any>error);

        //2. direct get and async pipe usage
         //this.products = this._productService.getProducts();
         //this.filteredProducts = this.products;

    }

    onRatingClicked(message: string): void{
        this.pageTitle= 'Product List '+ message;
    }
}
