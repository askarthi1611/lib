import { TestBed } from '@angular/core/testing';

import { UserdashboardService } from './userdashboard.service';

describe('UserdashboardService', () => {
  let service: UserdashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
