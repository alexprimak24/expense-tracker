/* eslint-disable no-unused-vars */
export enum CURRENCIES {
  EUR = '€',
  USD = '$',
  UA = '₴',
}

export enum CATEGORIES {
  Food = 'Food',
  Shopping = 'Shopping',
  Transport = 'Transport',
  Housing = 'Housing',
  Entertainment = 'Entertainment',
  OnlineServices = 'Online Services',
  Others = 'Others',
}

export interface Entry {
  id: string;
  amount: number;
  category: CATEGORIES;
  currency: CURRENCIES;
  date: number;
  comment?: string;
}

export type AddExpenseCallback = (expense: Entry) => void;
export type RemoveExpenseCallback = (expenseToRemove: Entry) => void;
