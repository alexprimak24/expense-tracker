import React from 'react';
import ExpenseEntry from './ExpenseEntry';
import { Entry } from '../../../../types';

interface ExpensesHistoryProps {
  expenseHistory: Entry[];
}

function ExpensesHistory({ expenseHistory }: ExpensesHistoryProps) {
  return (
    <section style={ExpensesHistoryStyle.section} className="outline">
      <div style={ExpensesHistoryStyle.entries}>
        {expenseHistory.map((expense) => (
          <ExpenseEntry key={expense.id} expense={expense} />
        ))}
      </div>
      <div style={ExpensesHistoryStyle.action}>
        <button className="button">Add entry btn</button>
        <div style={ExpensesHistoryStyle.pagination}>
          <button className="button button--pagination">←</button>
          <button className="button button--pagination">→</button>
        </div>
      </div>
    </section>
  );
}

const ExpensesHistoryStyle = {
  section: {
    margin: '20px 0',
    minWidth: '80%',
  },
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
