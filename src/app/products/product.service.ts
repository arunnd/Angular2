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
  private productUrl1 = '../assets/products1.json';
  private ratingUrl = '../assets/rating.json';

  constructor(private http:HttpClient) { }
  getProduct(id: number): Observable<IProduct> {
    return this.getProducts()
        .map((products: IProduct[]) => products.find(p => p.productId === id));
}
  // GET request
  getProducts() {
      return this.http.get<IProduct[]>(this.productUrl);
  }

  // POST request
  addUserDetails(user) : Observable<any> {
      return this.http.post<any>(this.productUrl, user, httpOptions);
  }

  saveRating(product: IProduct):  Observable<any> {
    //return this.http.get<any>(`${this.ratingUrl}?rate=${rate}`);
    let prodReq = {
      "productId": product.productId,
      "starRating": product.starRating
    }
    return this.http.post<any>('http://www.mocky.io/v2/5aa7534d2f00000f0c8ea4d4', prodReq, httpOptions);
  }

}
