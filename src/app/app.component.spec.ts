import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {MoneyPipe} from './money.pipe';
import {FormsModule} from '@angular/forms';
import {ExpenseService} from './expense.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {DateService} from './date.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        AppComponent,
        ExpensesComponent,
        MoneyPipe,
      ],
      providers: [
        ExpenseService,
        DateService,
        HttpClient,
        HttpHandler,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'BudgetTracker'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('BudgetTracker');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to BudgetTracker!');
  }));
});
