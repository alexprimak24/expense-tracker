import React, { useState } from 'react';
import { Entry, ExpenseCallback } from '../../../../types';
import { dhm } from '../../../../utils/helpers';
import { CategoryIcons } from '../../../../assets';
import EditEntry from './EditEntry';

interface ExpensesEntryProps {
  expense: Entry;
  onRemoveExpense: ExpenseCallback;
  onUpdateExpense: ExpenseCallback;
}

function HistoryEntry({
  expense,
  onRemoveExpense,
  onUpdateExpense,
}: ExpensesEntryProps) {
  const { category, amount, date, currency, comment } = expense;
  const [isEditOpen, setIsEditOpen] = useState(false);

  function onUpdateExpenseAndClose(expense: Entry) {
    onUpdateExpense(expense);
    setIsEditOpen(false);
  }

  return (
    <>
      <div style={HistoryEntryStyle.entry}>
        <span>{CategoryIcons[category]}</span>
        <div>{amount + ' ' + currency}</div>
        <div>{dhm(date)}</div>
        <button
          className="button button--entry"
          onClick={() => setIsEditOpen((prev) => !prev)}
        >
          ✏️
        </button>
        <button
          className="button button--entry button--entry--spaced"
          onClick={() => onRemoveExpense(expense)}
        >
          ❌
        </button>
      </div>
      {isEditOpen && (
        <EditEntry
          expense={expense}
          onUpdateExpense={onUpdateExpenseAndClose}
        />
      )}
    </>
  );
}

const HistoryEntryStyle = {
  entry: {
    display: 'grid',
    gridTemplateColumns: '20px 1fr 1fr 40px 40px',
    minWidth: '100%',
  } as React.CSSProperties,
};

export default HistoryEntry;
