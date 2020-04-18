/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResidentLoginService } from './residentLogin.service';

describe('Service: ResidentLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResidentLoginService]
    });
  });

  it('should ...', inject([ResidentLoginService], (service: ResidentLoginService) => {
    expect(service).toBeTruthy();
  }));
});
