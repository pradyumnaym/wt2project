import { TestBed } from '@angular/core/testing';

import { UsersimilarityService } from './usersimilarity.service';

describe('UsersimilarityService', () => {
  let service: UsersimilarityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersimilarityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
