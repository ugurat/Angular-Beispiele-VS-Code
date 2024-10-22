import { TestBed } from '@angular/core/testing';

import { ArbeitszeitenService } from './arbeitszeiten.service';

describe('ArbeitszeitenService', () => {
  let service: ArbeitszeitenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbeitszeitenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
