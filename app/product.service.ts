import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product }       from './product';

@Injectable()
export class ProductService {

  private productsUrl = 'http://localhost:4567/dashboard';  // URL to web api

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsUrl)
               .toPromise()
               .then(function(response) {
                 return response.json()
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getProduct(id: number): Promise<Product> {
    return this.getProducts()
               .then(products => products.find(product => product.id === id));
  }

}
