import { TestBed } from '@angular/core/testing';

import { VoteTimeService } from './vote-time.service';

describe('VoteTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoteTimeService = TestBed.get(VoteTimeService);
    expect(service).toBeTruthy();
  });
});
