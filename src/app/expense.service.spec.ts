import { TestBed, inject } from '@angular/core/testing';

import { ExpenseService } from './expense.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ExpenseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExpenseService,
        HttpClient,
        HttpHandler,
      ],
    });
  });

  it('should be created', inject([ExpenseService], (service: ExpenseService) => {
    expect(service).toBeTruthy();
  }));
});
