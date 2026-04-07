import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService3 {
  http = inject(HttpClient);

    apiUrl: string = 'https://api.freeprojectapi.com/api/Ecommerce/';

  getAllParentCategories() {
    return this.http.get( `${this.apiUrl}GetParentCategories` );
  }
}
