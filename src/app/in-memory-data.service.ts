import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const expenses = [
	{id: 11, amount: 2200, reason: 'Pizza', date: '04.01.2018' },

	{id: 12, amount: 160, reason: 'Butterbrezel', date: '05.01.2018' }


    ];
    return {expenses};
  }
}