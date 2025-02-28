import { CATEGORIES, Entry } from '../../types';

export function dhm(date: number) {
  const ms = Date.now() - date;

  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));

  const returnedDays = days < 1 ? '' : days + 'd';
  const returnedHours = hours < 1 ? '' : hours + 'h';
  const returnedMinutes = minutes < 1 ? '' : minutes + 'm';

  const ago = ' ago';
  if (days < 1 && hours < 1 && minutes < 1) return 'just now';
  else if (days < 1) return returnedHours + ' ' + returnedMinutes + ago;
  else if (days >= 1) return returnedDays + ago;
  else if (hours <= 1 && minutes > 1) return returnedMinutes + ago;
}

//DIFFERENT MANIPULATIONS WITH ENTRIES

export function totalSpentAllTime(expenses: Entry[]) {
  return expenses.reduce((acc: number, cur: Entry) => acc + cur.amount, 0);
}

export function averageSpentAllTime(expenses: Entry[]) {
  if (expenses.length === 0) return 0;
  return (totalSpentAllTime(expenses) / expenses.length).toFixed(2);
}

// This one with some googling and gpt03, way better as I actually don't need to sort
// the whole category section, all I need is max
export function highestSpentCategory(
  expenses: Entry[],
): [CATEGORIES, number] | null {
  if (expenses.length === 0) return null;

  // Aggregate expenses by category using reduce
  const categoriesExpenses = expenses.reduce<Record<CATEGORIES, number>>(
    (acc, expense) => {
      acc[expense.category] += expense.amount;
      return acc;
    },
    {
      [CATEGORIES.Food]: 0,
      [CATEGORIES.Shopping]: 0,
      [CATEGORIES.Transport]: 0,
      [CATEGORIES.Housing]: 0,
      [CATEGORIES.Entertainment]: 0,
      [CATEGORIES.OnlineServices]: 0,
      [CATEGORIES.Others]: 0,
    },
  );

  // Find the highest spending category without sorting the entire object
  const highestCategory = (
    Object.entries(categoriesExpenses) as [CATEGORIES, number][]
  ).reduce(
    //so basically there we compare second value of subarray and then return current or max which are objects
    (max, current) => (current[1] > max[1] ? current : max),
    [CATEGORIES.Food, 0] as [CATEGORIES, number],
  );
  return highestCategory;
}

// This is mine version that is not perfect but working
export function sortCategoriesByAmount(expenses: Entry[]) {
  if (expenses.length === 0) return null;
  const categoriesExpenses = {
    [CATEGORIES.Food]: 0,
    [CATEGORIES.Shopping]: 0,
    [CATEGORIES.Transport]: 0,
    [CATEGORIES.Housing]: 0,
    [CATEGORIES.Entertainment]: 0,
    [CATEGORIES.OnlineServices]: 0,
    [CATEGORIES.Others]: 0,
  };
  expenses.forEach((expense: Entry) => {
    categoriesExpenses[expense.category] =
      categoriesExpenses[expense.category] + expense.amount;
  });
  //Object.entries converted an object to an array or arrays with key value pairs
  //[[Food,0],[Shopping,100]] <- like that
  const highestCategory = Object.entries(categoriesExpenses)
    .sort((category, amount) => amount[1] - category[1])
    .map(([name, value]) => ({ name, value }));
  return highestCategory;
}
