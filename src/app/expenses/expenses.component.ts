import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense';

import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[];
  currentExpense: Expense;

  constructor(private expenseService: ExpenseService) { }

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

    setDate(): void{
    // solution: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript/4929629#4929629
      const today = new Date();
      const dd = today.getDate();
      const MM = today.getMonth() + 1;
      const yyyy = today.getFullYear();

      let day;
      if ( dd < 10 ) {
        day = '0' + dd;
      } else {
        day = dd;
      }

      let month;
      if ( MM < 10 ) {
        month = '0' + MM;
      } else {
        month = MM;
      }
      this.currentExpense.date = day + '.' + month + '.' + yyyy;
    }

    calculateTotal(): number{
        let total = 0;
        for ( let i = 0; i < this.expenses.length; i++ ) {
            total += this.expenses[i].amount;
        }
        return total;
    }

    calculateExpensesPerDay(): number {
        const today = new Date();
        const dd = today.getDate();
        return this.calculateTotal() / dd;
    }

}
