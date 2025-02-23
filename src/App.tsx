import React, { useState } from 'react';
import Header from './features/expenses/components/Header/Header';
import ExpensesHistory from './features/expenses/components/ExpensesHistory/ExpensesHistory';
import { Entry } from './types';
import { useLocalStorageState } from './features/expenses/hooks';

function App() {
  const [expenses, setExpense] = useLocalStorageState<Entry[]>(
    [],
    'expensesEntries',
  );

  function handleAddExpense(expense: Entry) {
    setExpense((pexp) => [...pexp, expense]);
  }

  function handleRemoveExpense(expenseToRemove: Entry) {
    const newArray = expenses.filter((expense) => expense !== expenseToRemove);
    setExpense(newArray);
  }

  function handleUpdateExpense(expenseToUpdate: Entry) {
    const newArray = expenses.filter(
      (expense) => expense.id !== expenseToUpdate.id,
    );
    setExpense([...newArray, expenseToUpdate]);
  }
  return (
    <div className="App">
      <Header />
      <ExpensesHistory
        onUpdateExpense={handleUpdateExpense}
        expenseHistory={expenses}
        onAddExpense={handleAddExpense}
        onRemoveExpense={handleRemoveExpense}
      />
    </div>
  );
}

export default App;
