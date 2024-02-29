import { TestBed } from '@angular/core/testing';

import { ComdoUiService } from './comdo-ui.service';

describe('ComdoUiService', () => {
  let service: ComdoUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComdoUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
