import React, { FormEvent, useState } from 'react';
import { Entry } from '../../../../types';
import ExpenseForm, { FORM_VARIANT } from '../../../../components/ExpenseForm';

interface ExitEntryProps {
  expense: Entry;
  onUpdateExpense: (expense: Entry) => void;
}
function EditEntry({ expense, onUpdateExpense }: ExitEntryProps) {
  const [expenseEntry, setExpenseEntry] = useState<Entry>(expense);

  function handleUpdateExpense(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onUpdateExpense(expenseEntry);
  }
  return (
    <ExpenseForm
      onFormSubmit={handleUpdateExpense}
      expenseEntry={expenseEntry}
      setExpenseEntry={setExpenseEntry}
      formVariant={FORM_VARIANT.EDIT}
    />
  );
}

export default EditEntry;
