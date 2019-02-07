import { TestBed } from '@angular/core/testing';

import { FaturasResolverService } from './faturas-resolver.service';

describe('FaturasResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaturasResolverService = TestBed.get(FaturasResolverService);
    expect(service).toBeTruthy();
  });
});
