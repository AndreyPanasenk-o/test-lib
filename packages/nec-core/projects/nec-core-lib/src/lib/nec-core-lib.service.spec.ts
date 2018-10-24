import { TestBed } from '@angular/core/testing';

import { NecCoreLibService } from './nec-core-lib.service';

describe('NecCoreLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NecCoreLibService = TestBed.get(NecCoreLibService);
    expect(service).toBeTruthy();
  });
});
