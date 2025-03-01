import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Entry } from '../../../../types';
import { dhm } from '../../../../utils/helpers';

interface SpentOverTimeChartProps {
  expenses: Entry[];
}

function SpentOverTimeChart({ expenses }: SpentOverTimeChartProps) {
  const formattedExpenses = expenses.map((expense) => ({
    ...expense,
    date: dhm(expense.date)?.trim(),
  }));

  return (
    <>
      <h1>Expenses over time:</h1>
      <AreaChart
        width={1200}
        height={550}
        data={formattedExpenses}
        margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" allowDuplicatedCategory={true} />
        <YAxis dataKey="amount" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="amount"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
        <Area
          type="monotone"
          dataKey="category"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </>
  );
}

export default SpentOverTimeChart;
