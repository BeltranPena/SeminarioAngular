import { TestBed } from '@angular/core/testing';

import { ChanguitoServiceService } from './changuito-service.service';

describe('ChanguitoServiceService', () => {
  let service: ChanguitoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChanguitoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
