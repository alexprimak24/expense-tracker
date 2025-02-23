/* eslint-disable no-unused-vars */
export enum Categories {
  Food = 'Food',
  Shopping = 'Shopping',
  Transport = 'Transport',
  Housing = 'Housing',
  Entertainment = 'Entertainment',
  OnlineServices = 'Online Services',
  Others = 'Others',
}

export interface Entry {
  id: number;
  amount: number;
  category: Categories;
  currency: string;
  date: Date;
  comment?: string;
}
