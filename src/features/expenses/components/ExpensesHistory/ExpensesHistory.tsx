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

function ExpensesHistory({
  expenseHistory,
  onAddExpense,
  onRemoveExpense,
  onUpdateExpense,
}: ExpensesHistoryProps) {
  const [isAddExpenseFormOpen, setIsAddExpenseFormOpen] = useState(true);

  //Just the same func as from props but also closes form
  function onAddExpenseSubmit(expense: Entry) {
    onAddExpense(expense);
    setIsAddExpenseFormOpen(false);
  }

  return (
    <section className="section outline">
      <div style={ExpensesHistoryStyle.entries}>
        {expenseHistory.length > 0 ? (
          expenseHistory.map((expense) => (
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
          <button className="button button--pagination">←</button>
          <button className="button button--pagination">→</button>
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
