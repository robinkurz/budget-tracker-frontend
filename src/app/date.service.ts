import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  constructor() { }

  getFormattedDate(): string {
    // solution: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript/4929629#4929629
    const today = this.getDate();
    const dd = today.getDate();
    const MM = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    let day;
    if ( dd < 10 ) {
      day = '0' + dd;
    } else {
      day = dd;
    }

    let month;
    if ( MM < 10 ) {
      month = '0' + MM;
    } else {
      month = MM;
    }
    return day + '.' + month + '.' + yyyy;
  }

  getDay(): number {
    return this.getDate().getDate();
  }

  private getDate(): Date {
    return new Date();
  }

  getMonthAndYear(): string {
    return this.getFormattedDate().substring(3, 10);
  }

  formatMonthAndYear(fullDate : string): string {
    return fullDate.substring(3, 10);
  }

}
