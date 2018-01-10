import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Expense } from './expense';
import { EXPENSES } from './mock-expenses';

@Injectable()
export class ExpenseService {

  constructor() { }

  getExpenses(): Observable<Expense[]> {
	return of(EXPENSES);
  }

  addExpense(expense: Expense): Observable<Expense>{
	//EXPENSES.push(expense);
  	return of(expense);
  }


}
