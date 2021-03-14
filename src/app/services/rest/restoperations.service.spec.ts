import { TestBed } from '@angular/core/testing';

import { RestoperationsService } from './restoperations.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('RestoperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, RouterTestingModule],
  }));

  it('should be created', () => {
    const service: RestoperationsService = TestBed.get(RestoperationsService);
    expect(service).toBeTruthy();
  });
});
