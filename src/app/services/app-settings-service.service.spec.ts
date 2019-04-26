import { TestBed } from '@angular/core/testing';

import { AppSettingsServiceService } from './app-settings-service.service';

describe('AppSettingsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppSettingsServiceService = TestBed.get(AppSettingsServiceService);
    expect(service).toBeTruthy();
  });
});
