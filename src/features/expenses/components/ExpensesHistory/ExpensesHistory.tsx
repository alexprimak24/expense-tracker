import React, { useState } from 'react';
import ExpenseEntry from './ExpenseEntry';
import { ExpenseCallback, Entry } from '../../../../types';
import AddEntry from './AddEntry';

interface ExpensesHistoryProps {
  expenseHistory: Entry[];
  onAddExpense: ExpenseCallback;
  onRemoveExpense: ExpenseCallback;
  onUpdateExpense: ExpenseCallback;
}
const ITEMS_PER_PAGE = 5;

function ExpensesHistory({
  expenseHistory,
  onAddExpense,
  onRemoveExpense,
  onUpdateExpense,
}: ExpensesHistoryProps) {
  //Related to form
  const [isAddExpenseFormOpen, setIsAddExpenseFormOpen] = useState(true);
  //Related to pagination
  const [currentPage, setCurrentPage] = useState(1);

  const totalExpenses = expenseHistory.length;

  //7.002 rounds to 8 - as we want to show another page even if only 1 entry presented
  const totalPages = Math.ceil(totalExpenses / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentExpenses = expenseHistory.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  function goToPage(page: number) {
    if (page < 1 || page > totalExpenses) return;
    setCurrentPage(page);
  }
  //Just the same func as from props but also closes form
  function onAddExpenseSubmit(expense: Entry) {
    onAddExpense(expense);
    setIsAddExpenseFormOpen(false);
  }

  return (
    <section className="section outline">
      <div style={ExpensesHistoryStyle.entries}>
        {currentExpenses.length > 0 ? (
          currentExpenses.map((expense) => (
            <ExpenseEntry
              key={expense.id}
              expense={expense}
              onRemoveExpense={onRemoveExpense}
              onUpdateExpense={onUpdateExpense}
            />
          ))
        ) : (
          <h2>Add Your Entires here</h2>
        )}
      </div>
      <div style={ExpensesHistoryStyle.action}>
        {isAddExpenseFormOpen ? (
          <AddEntry
            onAddExpense={onAddExpenseSubmit}
            setIsFormOpen={setIsAddExpenseFormOpen}
          />
        ) : (
          <button
            className="button"
            onClick={() => setIsAddExpenseFormOpen(true)}
          >
            Add Expense
          </button>
        )}
        <div style={ExpensesHistoryStyle.pagination}>
          <button
            className="button button--pagination"
            disabled={currentPage == 1}
            onClick={() => goToPage(currentPage - 1)}
          >
            ←
          </button>
          <button
            className="button button--pagination"
            disabled={currentPage == totalPages}
            onClick={() => goToPage(currentPage + 1)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

const ExpensesHistoryStyle = {
  entries: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '100%',
    margin: 'auto',
    gap: '15px',
    padding: '20px 10px',
  } as React.CSSProperties,
  action: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
  } as React.CSSProperties,
  pagination: {
    display: 'flex',
    gap: '10px',
  } as React.CSSProperties,
};

export default ExpensesHistory;
