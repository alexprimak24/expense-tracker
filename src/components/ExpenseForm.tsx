import React, { FormEvent } from 'react';
import { CATEGORIES, CURRENCIES, Entry } from '../types';

interface ExpenseFormProps {
  // eslint-disable-next-line no-unused-vars
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  expenseEntry: Entry;
  setExpenseEntry: React.Dispatch<React.SetStateAction<Entry>>;
  formVariant: FORM_VARIANT;
}

export enum FORM_VARIANT {
  // eslint-disable-next-line no-unused-vars
  ADD = 'Add',
  // eslint-disable-next-line no-unused-vars
  EDIT = 'Edit',
}

function ExpenseForm({
  onFormSubmit,
  expenseEntry,
  setExpenseEntry,
  formVariant,
}: ExpenseFormProps) {
  const VARIANT: FORM_VARIANT = formVariant;
  const CATEGORIES_ARR = Object.values(CATEGORIES);
  const CURRENCIES_ARR = Object.values(CURRENCIES);

  return (
    <form
      action=""
      style={{ display: 'flex', flexDirection: 'column' }}
      method="POST"
      onSubmit={onFormSubmit}
    >
      <h2>{VARIANT} a New Expense</h2>
      <label>Amount</label>
      <input
        type="number"
        required
        value={expenseEntry.amount}
        onChange={(e) =>
          setExpenseEntry({
            ...expenseEntry,
            amount: Number(e.target.value),
          })
        }
      />
      <label>Category</label>
      <select
        required
        value={expenseEntry.category}
        onChange={(e) =>
          setExpenseEntry({
            ...expenseEntry,
            category: e.target.value as CATEGORIES,
          })
        }
      >
        {CATEGORIES_ARR.map((category) => (
          <option value={category} key={category}>
            {
              <>
                {/* TOOOOOOOOODO <span>{CategoryIcons[category]}</span> <p>{category}</p> */}
                {category}
              </>
            }
          </option>
        ))}
      </select>
      <label>Currency</label>
      <select
        required
        value={expenseEntry.currency}
        onChange={(e) =>
          setExpenseEntry({
            ...expenseEntry,
            currency: e.target.value as CURRENCIES,
          })
        }
      >
        {CURRENCIES_ARR.map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>

      <label>Comment (Optional)</label>
      <input
        value={expenseEntry.comment}
        onChange={(e) =>
          setExpenseEntry({
            ...expenseEntry,
            comment: e.target.value,
          })
        }
      />
      <button className="button">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
