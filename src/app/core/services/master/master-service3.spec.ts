import { TestBed } from '@angular/core/testing';

import { MasterService3 } from './master-service3';

describe('MasterService3', () => {
  let service: MasterService3;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService3);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
