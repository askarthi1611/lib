import { TestBed } from '@angular/core/testing';

import { TransService } from './trans.service';

describe('TransService', () => {
  let service: TransService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
