import React, { FormEvent, useState } from 'react';
import {
  Entry,
  CATEGORIES,
  CURRENCIES,
  AddExpenseCallback,
} from '../../../../types';
import { CategoryIcons } from '../../../../assets';

interface AddEntryProps {
  onAddExpense: AddExpenseCallback;
}

function AddEntry({ onAddExpense }: AddEntryProps) {
  const CATEGORIES_ARR = Object.values(CATEGORIES);
  const CURRENCIES_ARR = Object.values(CURRENCIES);

  const [expenseEntry, setExpenseEntry] = useState<Entry>({
    id: crypto.randomUUID(),
    amount: 100,
    category: CATEGORIES.Entertainment,
    currency: CURRENCIES.USD,
    comment: '',
    //DATE WILL BE ON SUBMIT
    date: Date.now(),
  });

  console.log();
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
      <form
        action=""
        style={{ display: 'flex', flexDirection: 'column' }}
        method="POST"
        onSubmit={handleAddExpense}
      >
        <h2>Add a New Expense</h2>
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
                  <span>{CategoryIcons[category]}</span> <p>{category}</p>
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
    </>
  );
}

export default AddEntry;
