import { Expense } from './expense';

export class ExpenseDto{
  _embedded: EmbeddedExpense;
}

export class EmbeddedExpense{
  expenses: Expense[];
}
