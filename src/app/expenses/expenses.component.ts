import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense';

import { ExpenseService } from '../expense.service';
import {DateService} from '../date.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[];
  currentExpense: Expense;
  tags: string[];
  currentTag: string;

  constructor(private expenseService: ExpenseService, private dateService: DateService) { this.tags = []; }

  ngOnInit() {
    this.currentExpense = new Expense();
    this.getExpenses();
  }

  onEnterPress() {
    this.tags.push(this.currentTag);
    this.currentTag = '';
  }

  getExpenses(): void {
    this.expenseService.getExpenses()
      .pipe(
        map( expenses => expenses.filter( expense => expense.date.includes( this.dateService.getMonthAndYear() ) ) )
      )
      .subscribe(expenses => this.expenses = expenses.reverse());
  }

  add(): void {
    this.setDate();
    this.expenseService.addExpense(this.currentExpense)
      .subscribe(expense => { this.expenses.push(expense);
      });
    this.currentExpense = new Expense();
    }

    setDate(): void {
      this.currentExpense.date = this.dateService.getFormattedDate();
    }

    calculateTotal(): number {
        let total = 0;
        if ( this.expenses != null ) {
          for ( let i = 0; i < this.expenses.length; i++ ) {
            total += this.expenses[i].amount;
          }
        }
        return total;
    }

    calculateExpensesPerDay(): number {
        return this.calculateTotal() / this.dateService.getDay();
    }

}
