import { TestBed } from '@angular/core/testing';

import { ListaGuard } from './lista.guard';

describe('ListaGuard', () => {
  let guard: ListaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ListaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
