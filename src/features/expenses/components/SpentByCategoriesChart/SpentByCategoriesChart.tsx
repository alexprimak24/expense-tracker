import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import CustomTooltip from './CustomTooltip';

interface SpentByCategoriesChartProps {
  sortedCategories: categoriesObj[] | null;
}

interface categoriesObj {
  name: string;
  value: number;
}

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#9933FF',
  '#FF3333',
  '#33CC33',
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function SpentByCategoriesChart({
  sortedCategories,
}: SpentByCategoriesChartProps) {
  if (sortedCategories === null)
    return (
      <>
        <h1>Spent by categories:</h1>{' '}
        <h4>Oops, seems like there is no expenses yet</h4>
      </>
    );
  return (
    <>
      <h1>Spent by categories:</h1>
      <PieChart width={800} height={800}>
        <Pie
          data={sortedCategories}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          // outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {sortedCategories.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </>
  );
}

export default SpentByCategoriesChart;
