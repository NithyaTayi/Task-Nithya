import { TestBed } from '@angular/core/testing';

import { UndoRedoserviceService } from './undo-redoservice.service';

describe('UndoRedoserviceService', () => {
  let service: UndoRedoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UndoRedoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
