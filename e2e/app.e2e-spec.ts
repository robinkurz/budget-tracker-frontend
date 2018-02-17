import { AppPage } from './app.po';
import {ExpensesComponent} from '../src/app/expenses/expenses.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

describe('budget-tracker App', () => {
  let page: AppPage;
  let fixture: ComponentFixture<ExpensesComponent>;
  let component: ExpensesComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExpensesComponent
      ],
    }).compileComponents();

    page = new AppPage();
  }));

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to BudgetTracker!');
  });
});
