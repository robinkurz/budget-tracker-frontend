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
    var today = new Date();
	var dd = today.getDate();
	var MM = today.getMonth() + 1;
	var yyyy = today.getFullYear();

	if( dd < 10 ){
		var day = '0' + dd;
		}

	if( MM < 10 ){
		var month = '0' + MM;
	}

    	this.currentExpense.date = day + '.' + month + '.' + yyyy;
    }

    calculateTotal(): number{
        var total = 0;
        for( var i = 0; i < this.expenses.length; i++ ){
            total += this.expenses[i].amount;
        }
        return total;
    }

}
