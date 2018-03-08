import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  private productUrl = '../assets/products.json';
  private userUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  // GET request
  getProducts() {
      return this.http.get<IProduct[]>(this.productUrl);
  }

  // GET request with param
  getUserDetails(id: number): Observable<any> {
      return this.http.get<any>(`${this.userUrl}?id=${id}`);
  }

  // POST request
  addUserDetails(user) : Observable<any> {
      return this.http.post<any>(this.userUrl, user, httpOptions);
  }
}
