import { TestBed } from '@angular/core/testing';

import { FetchColorsService } from './fetch-colors.service';

describe('FetchColorsService', () => {
  let service: FetchColorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchColorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
