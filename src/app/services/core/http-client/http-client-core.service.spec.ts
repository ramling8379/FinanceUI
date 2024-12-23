import { TestBed } from '@angular/core/testing';

import { HttpClientCoreService } from './http-client-core.service';

describe('HttpClientCoreService', () => {
  let service: HttpClientCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
