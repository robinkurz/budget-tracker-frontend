import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Expense } from './expense';
import { ExpenseDto } from './expense-dto';
import { EXPENSES } from './mock-expenses';

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

@Injectable()
export class ExpenseService {


private expensesUrl = 'http://localhost:8080/expenses/?size=100';

  constructor( private http: HttpClient ) {}

  getExpenses(): Observable<Expense[]> {
      return this.http.get<ExpenseDto>(this.expensesUrl)
          .pipe(
            map(data => data._embedded.expenses), 
            tap(expenses => this.log('fetched expenses')),
            catchError(this.handleError('getExpenses', []))
          );
  }

  addExpense(expense: Expense): Observable<Expense> {
      return this.http.post<Expense>(this.expensesUrl, expense, httpOptions)
          .pipe(
          tap((expense: Expense) => this.log(`added Expense with id=${expense.id} and reason ${expense.reason}`)),
          catchError(this.handleError<Expense>('addExpense'))
            );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }


}
