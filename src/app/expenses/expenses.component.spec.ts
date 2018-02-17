import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesComponent } from './expenses.component';
import {MoneyPipe} from '../money.pipe';
import {FormsModule} from '@angular/forms';
import {ExpenseService} from '../expense.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

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
});
