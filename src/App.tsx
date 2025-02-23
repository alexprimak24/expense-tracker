import React from 'react';
import Header from './features/expenses/components/Header/Header';
import ExpensesHistory from './features/expenses/components/ExpensesHistory/ExpensesHistory';
import { Entry } from './types';
import { useLocalStorageState } from './features/expenses/hooks';
import SummarySection from './features/expenses/components/SummarySection/SummarySection';

function App() {
  const [expenses, setExpenses] = useLocalStorageState<Entry[]>(
    [],
    'expensesEntries',
  );

  function handleAddExpense(expense: Entry) {
    setExpenses((pexp) => [...pexp, expense]);
  }

  function handleRemoveExpense(expenseToRemove: Entry) {
    const newArray = expenses.filter(
      (expense) => expense.id !== expenseToRemove.id,
    );
    setExpenses(newArray);
  }

  function handleUpdateExpense(expenseToUpdate: Entry) {
    const newArray = expenses.map((expense) =>
      expense.id === expenseToUpdate.id ? expenseToUpdate : expense,
    );
    setExpenses(newArray);
  }
  return (
    <div className="App">
      <Header />
      <SummarySection />
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
