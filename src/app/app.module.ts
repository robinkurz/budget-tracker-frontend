import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';

import { ExpenseService } from './expense.service';  

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent
  ],
  imports: [
  	BrowserModule,
    FormsModule,
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(
    //    InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [ ExpenseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
