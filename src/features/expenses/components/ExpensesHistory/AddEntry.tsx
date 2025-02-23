import React, { FormEvent, useState } from 'react';
import {
  Entry,
  CATEGORIES,
  CURRENCIES,
  ExpenseCallback,
} from '../../../../types';
import ExpenseForm, { FORM_VARIANT } from '../../../../components/ExpenseForm';

interface AddEntryProps {
  onAddExpense: ExpenseCallback;
}

function AddEntry({ onAddExpense }: AddEntryProps) {
  const [expenseEntry, setExpenseEntry] = useState<Entry>({
    id: crypto.randomUUID(),
    amount: 100,
    category: CATEGORIES.Entertainment,
    currency: CURRENCIES.USD,
    comment: '',
    date: Date.now(),
  });

  function assignDate() {
    setExpenseEntry({ ...expenseEntry, date: Date.now() });
  }
  function handleAddExpense(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //Add entry to the entry array
    assignDate();
    onAddExpense(expenseEntry);
  }
  console.log(expenseEntry);
  return (
    <>
      <ExpenseForm
        onFormSubmit={handleAddExpense}
        expenseEntry={expenseEntry}
        setExpenseEntry={setExpenseEntry}
        formVariant={FORM_VARIANT.ADD}
      />
    </>
  );
}

export default AddEntry;
