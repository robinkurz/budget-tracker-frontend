import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense';

import { ExpenseService } from '../expense.service';
import {DateService} from '../date.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[];
  currentExpense: Expense;

  constructor(private expenseService: ExpenseService, private dateService: DateService) { }

  ngOnInit() {
    this.currentExpense = new Expense();
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenseService.getExpenses()
      .subscribe(expenses => this.expenses = expenses);
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
