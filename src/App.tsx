import React from 'react';
import Header from './features/expenses/components/Header/Header';
import ExpensesHistory from './features/expenses/components/ExpensesHistory/ExpensesHistory';
import { Entry } from './types';

const mockExpense: Entry[] = [
  {
    id: 374923,
    amount: 10,
    category: 'Beverages',
    currency: 'USD',
    date: new Date('2025-01-20T09:30:51.01'),
    comment: 'Bought Bread',
  },
  {
    id: 221875,
    amount: 200,
    category: 'Travel',
    currency: 'USD',
    date: new Date('2024-04-20T09:30:51.01'),
    comment: 'Bought Ticket to England',
  },
  {
    id: 857123,
    amount: 150,
    category: 'Beverages',
    currency: 'USD',
    date: new Date('2025-01-20T09:30:51.01'),
    comment: 'Went to the local store and bought a lot of bread',
  },
  {
    id: 382967,
    amount: 350,
    category: 'My Own Category',
    currency: 'USD',
    date: new Date('2025-02-20T09:30:51.01'),
    comment: 'Bought ai agent',
  },
  {
    id: 564738,
    amount: 600,
    category: 'Investment',
    currency: 'USD',
    date: new Date('2022-04-20T09:30:51.01'),
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
