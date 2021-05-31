import { TestBed } from '@angular/core/testing';

import { ServicesDbService } from './services-db.service';

describe('ServicesDbService', () => {
  let service: ServicesDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
