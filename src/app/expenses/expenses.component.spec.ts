import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesComponent } from './expenses.component';
import {MoneyPipe} from '../money.pipe';
import {FormsModule} from '@angular/forms';
import {ExpenseService} from '../expense.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Expense} from '../expense';

describe('ExpensesComponent', () => {
  let component: ExpensesComponent
  let fixture: ComponentFixture<ExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        ExpensesComponent,
        MoneyPipe,
      ],
      providers: [
        ExpenseService,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate 50', () => {
    const expense30 = new Expense();
    expense30.amount = 30;
    const expense20 = new Expense();
    expense20.amount = 20;
    component.expenses = [expense30, expense20];
    expect(component.calculateTotal()).toBe(50);
  });

  it('should calculate -20', () => {
    const expense30 = new Expense();
    expense30.amount = 30;
    const expenseNegative50 = new Expense();
    expenseNegative50.amount = -50;
    component.expenses = [expense30, expenseNegative50];
    expect(component.calculateTotal()).toBe(-20);
  });

});
