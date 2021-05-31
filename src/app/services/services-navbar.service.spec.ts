import { TestBed } from '@angular/core/testing';

import { ServicesNavbarService } from './services-navbar.service';

describe('ServicesNavbarService', () => {
  let service: ServicesNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
