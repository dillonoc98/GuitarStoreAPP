import { TestBed } from '@angular/core/testing';

import { GuitarServiceService } from './services.service';

describe('ServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuitarServiceService = TestBed.get(GuitarServiceService);
    expect(service).toBeTruthy();
  });
});
