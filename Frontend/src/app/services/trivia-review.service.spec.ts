import { TestBed } from '@angular/core/testing';

import { TriviaReviewService } from './trivia-review.service';

describe('TriviaReviewService', () => {
  let service: TriviaReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriviaReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
