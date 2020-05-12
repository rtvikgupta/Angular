import { TestBed } from '@angular/core/testing';

import { DummydataService } from './dummydata.service';

describe('DummydataService', () => {
  let service: DummydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
