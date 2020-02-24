import { TestBed, async, inject } from '@angular/core/testing';

import { AuthPanelGuard } from './auth-panel.guard';

describe('AuthPanelGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthPanelGuard]
    });
  });

  it('should ...', inject([AuthPanelGuard], (guard: AuthPanelGuard) => {
    expect(guard).toBeTruthy();
  }));
});
