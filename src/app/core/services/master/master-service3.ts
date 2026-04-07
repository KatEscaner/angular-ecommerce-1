import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { GLOBAL_CONSTANTS } from '../../constants/global.constants';

@Injectable({
  providedIn: 'root',
})
export class MasterService3 {
  http = inject(HttpClient);


  getAllParentCategories() {
    return this.http.get( `${environment.API_URL}${GLOBAL_CONSTANTS.API_END_POINTS.CATEGORY.GET_PARENT_CATEGORIES}` );
  }
}
