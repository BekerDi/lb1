import { TestBed } from '@angular/core/testing';

import { Lectures } from './lectures';

describe('Lectures', () => {
  let service: Lectures;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lectures);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
