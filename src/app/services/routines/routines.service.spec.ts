import { TestBed } from '@angular/core/testing';

import { RoutinesService } from './routines.service';

// @ts-ignore
describe('RoutinesService', () => {
  let service: RoutinesService;

  // @ts-ignore
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutinesService);
  });

  // @ts-ignore
  it('should be created', () => {
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});
