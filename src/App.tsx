import React, { useMemo } from 'react';
import Header from './features/expenses/components/Header/Header';
import ExpensesHistory from './features/expenses/components/ExpensesHistory/ExpensesHistory';
import { Entry } from './types';
import { useLocalStorageState } from './features/expenses/hooks';
import SummarySection from './features/expenses/components/SummarySection/SummarySection';
import SpentByCategoriesChart from './features/expenses/components/SpentByCategoriesChart/SpentByCategoriesChart';
import { sortCategoriesByAmount } from './utils/helpers';

function App() {
  const [expenses, setExpenses] = useLocalStorageState<Entry[]>(
    [],
    'expensesEntries',
  );

  const sortedExpenses = useMemo(() => {
    //don't use it as it mutates array
    // return expenses.sort((a, b) => b.date - a.date);
    //just reminder: spread created a shallow copy of an array
    return [...expenses].sort((a, b) => b.date - a.date);
  }, [expenses]);

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
  console.log(sortCategoriesByAmount(expenses));
  return (
    <div className="App">
      <Header />
      <SummarySection expenses={expenses} />
      <ExpensesHistory
        onUpdateExpense={handleUpdateExpense}
        expenseHistory={sortedExpenses}
        onAddExpense={handleAddExpense}
        onRemoveExpense={handleRemoveExpense}
      />
      <SpentByCategoriesChart
        sortedCategories={sortCategoriesByAmount(expenses)}
      />
    </div>
  );
}

export default App;
