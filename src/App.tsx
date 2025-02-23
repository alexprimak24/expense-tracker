import React from 'react';
import Header from './features/expenses/components/Header/Header';
import ExpensesHistory from './features/expenses/components/ExpensesHistory/ExpensesHistory';
import { Entry, Categories } from './types';

const mockExpense: Entry[] = [
  {
    id: 374923,
    amount: 10,
    category: Categories.Food,
    currency: 'USD',
    date: new Date('2025-01-20T09:30:51.01'),
    comment: 'Bought Bread',
  },
  {
    id: 221875,
    amount: 200,
    category: Categories.Transport,
    currency: 'USD',
    date: new Date('2025-02-23T02:30:51.01'),
    comment: 'Bought Ticket to England',
  },
  {
    id: 857123,
    amount: 150,
    category: Categories.Housing,
    currency: 'USD',
    date: new Date('2025-01-20T09:30:51.01'),
    comment: 'Went to the local store and bought a lot of bread',
  },
  {
    id: 382967,
    amount: 350,
    category: Categories.OnlineServices,
    currency: 'USD',
    date: new Date('2025-02-22T09:30:51.01'),
    comment: 'Bought ai agent',
  },
  {
    id: 564738,
    amount: 600,
    category: Categories.Others,
    currency: 'USD',
    date: new Date('2025-02-12T09:30:51.01'),
    comment: 'Invested into dogecoin',
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <ExpensesHistory expenseHistory={mockExpense} />
    </div>
  );
}

export default App;
