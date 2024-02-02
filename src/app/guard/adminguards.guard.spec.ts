import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminguardsGuard } from './adminguards.guard';

describe('adminguardsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminguardsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
