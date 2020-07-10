import { TestBed } from '@angular/core/testing';

import { FilterPostsService } from './filter-posts.service';

describe('FilterPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterPostsService = TestBed.get(FilterPostsService);
    expect(service).toBeTruthy();
  });
});
