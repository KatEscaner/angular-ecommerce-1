import { TestBed } from '@angular/core/testing';

import { ProductCustumer } from './product-custumer';

describe('ProductCustumer', () => {
  let service: ProductCustumer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCustumer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
