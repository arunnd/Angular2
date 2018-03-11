import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './product';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  private productUrl = '../assets/products.json';
  private userUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }
  getProduct(id: number): Observable<IProduct> {
    return this.getProducts()
        .map((products: IProduct[]) => products.find(p => p.productId === id));
}
  // GET request
  getProducts() {
      return this.http.get<IProduct[]>(this.productUrl);
  }
}
