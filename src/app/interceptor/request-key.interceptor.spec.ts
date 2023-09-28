import { TestBed } from '@angular/core/testing';

import { RequestKeyInterceptor } from './request-key.interceptor';

describe('RequestKeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RequestKeyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RequestKeyInterceptor = TestBed.inject(RequestKeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
