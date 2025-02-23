import React from 'react';
import { Entry, RemoveExpenseCallback } from '../../../../types';
import { dhm } from '../../../../utils/helpers';
import { CategoryIcons } from '../../../../assets';

interface ExpensesEntryProps {
  expense: Entry;
  onRemoveExpense: RemoveExpenseCallback;
}

//TODO
// SEND IT TO HELPERS FUNCTIONS

//THIS HOW BY ADDING ENTRY HANDLE DATE
//MAYBE USE SOME HOOK FOR CONVERTING DATE FROM NUMBER TO THE HUMAN READABLE FORM
// OR
// dhm HOOK CHANGE TO THE WAY IT WOULD BE EASIER TO USE WITH THE USER INPUT

function HistoryEntry({ expense, onRemoveExpense }: ExpensesEntryProps) {
  const { category, amount, date, currency, comment } = expense;

  return (
    <div style={HistoryEntryStyle.entry}>
      <span>{CategoryIcons[category]}</span>
      <div>{amount + ' ' + currency}</div>
      <div>{dhm(date)}</div>
      <button className="button button--entry">✏️</button>
      <button
        className="button button--entry button--entry--spaced"
        onClick={() => onRemoveExpense(expense)}
      >
        ❌
      </button>
    </div>
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
