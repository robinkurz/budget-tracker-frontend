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
  	this.setDate();
  	this.expenseService.addExpense(this.currentExpense)
	.subscribe(expense => { this.expenses.push(expense); 
	});
    this.currentExpense = new Expense();
    }

    setDate(): void{
    	// solution: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript/4929629#4929629
	var day = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();

	if( day < 10 ){
		day = '0' + day;
		}

	if( month < 10 ){
		month = '0' + month;
	}

    	this.currentExpense.date = day + '.' + month + '.' + year;
    }

}
