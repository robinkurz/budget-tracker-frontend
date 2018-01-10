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
  currentExpense: string;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
  	this.getExpenses();
  }

  onKey(){
  	 this.currentExpense = '0.0' + this.currentExpense; 
  }

  getExpenses(): void{
	this.expenseService.getExpenses()
		.subscribe(expenses => this.expenses = expenses);
  }

  add(amount: number, reason: string): void{
  	this.expenseService.addExpense(
	{id: 3, amount, reason, date: "10.01.2018"} as Expense)
	.subscribe(expense => { this.expenses.push(expense); 
	});
  }

}
