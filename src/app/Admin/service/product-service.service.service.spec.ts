import { TestBed } from '@angular/core/testing';

import { ProductServiceServiceService } from './product-service.service.service';

describe('ProductServiceServiceService', () => {
  let service: ProductServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
