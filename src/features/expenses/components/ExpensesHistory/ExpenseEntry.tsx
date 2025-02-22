import React from 'react';
import { Entry } from '../../../../types';

interface ExpensesEntryProps {
  expense: Entry;
}

function HistoryEntry({ expense }: ExpensesEntryProps) {
  const { category, amount, date, currency, comment } = expense;
  console.log(expense);
  return (
    <div style={HistoryEntryStyle.entry}>
      <span>{category}</span>
      <div>{amount + ' ' + currency}</div>
      <div>{date.toString()}</div>
      <button>✏️</button>
      <button>❌</button>
    </div>
  );
}

const HistoryEntryStyle = {
  entry: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '100%',
    // gap: '10px',
    justifyContent: 'space-between',
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
    padding: '10px 20px',
  } as React.CSSProperties,
  pagination: {
    display: 'flex',
    gap: '10px',
  } as React.CSSProperties,
};

export default HistoryEntry;
