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
    this.setDate();
    this.getExpenses();
  }

  onEnterPress() {
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenseService.getExpensesFor(this.dateService.formatMonthAndYear(this.currentExpense.date))
      .pipe(
        map( expenses => expenses.filter( expense => expense.date.includes( this.dateService.formatMonthAndYear(this.currentExpense.date) ) ) )
      )
      .subscribe(expenses => this.expenses = expenses.reverse());
  }

  add(): void {
    this.expenseService.addExpense(this.currentExpense)
      .subscribe(expense => { this.expenses.push(expense);
      });
    let chosenDate = this.currentExpense.date;
    this.currentExpense = new Expense();
    this.currentExpense.date = chosenDate;
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
