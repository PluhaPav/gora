import { TestBed } from '@angular/core/testing';

import { FriendsListService } from './friends-list.service';

describe('FriendsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FriendsListService = TestBed.get(FriendsListService);
    expect(service).toBeTruthy();
  });
});
