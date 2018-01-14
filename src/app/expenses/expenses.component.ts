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

  getExpenses(): void{
	this.expenseService.getExpenses()
		.subscribe(expenses => this.expenses = expenses);
  }

  add(): void{
  	this.expenseService.addExpense(this.currentExpense)
	.subscribe(expense => { this.expenses.push(expense); 
	});
    this.currentExpense = new Expense();
  }

}
