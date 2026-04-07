import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);

  apiUrl: string = 'https://api.freeprojectapi.com/api/Ecommerce/';

  getAllProducts() {
    return this.http.get( `${this.apiUrl}get-products` );
  }
}
