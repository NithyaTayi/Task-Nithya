import { TestBed } from '@angular/core/testing';

import { DrawshapeService } from './drawshape.service';

describe('DrawshapeService', () => {
  let service: DrawshapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawshapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
