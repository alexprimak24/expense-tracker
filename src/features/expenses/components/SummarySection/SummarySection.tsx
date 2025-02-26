import React from 'react';
import { Entry } from '../../../../types';
import {
  averageSpentAllTime,
  highestSpentCategory,
  totalSpentAllTime,
} from '../../../../utils/helpers';
import { CategoryIcons } from '../../../../assets';

//temporary for now as will add more currencies and convert with api
const SYMBOL = '$';

interface SummarySectionProops {
  expenses: Entry[];
}

function SummarySection({ expenses }: SummarySectionProops) {
  const totalSpent = totalSpentAllTime(expenses);
  const averageSpent = averageSpentAllTime(expenses);
  const highestCategoryData = highestSpentCategory(expenses);
  return (
    <section style={SummarySectionStyle.section} className="section outline">
      {totalSpent && highestCategoryData ? (
        <>
          <div className="">
            <h2>🔋 Total Spent</h2>
            <div style={SummarySectionStyle.result}>
              {totalSpent}
              {SYMBOL}
            </div>
          </div>
          <div className="">
            <h2>🏆 Highest Spent Category</h2>
            <div style={SummarySectionStyle.result}>
              {CategoryIcons[highestCategoryData[0]]}{' '}
              <span>
                {highestCategoryData[0]} {highestCategoryData[1]}
                {SYMBOL}
              </span>
            </div>
          </div>
          <div className="">
            <h2>📈 Average Spent Month</h2>
            <div style={SummarySectionStyle.result}>
              {averageSpent}
              {SYMBOL}
            </div>
          </div>{' '}
        </>
      ) : (
        <h2>No expenses yet</h2>
      )}
    </section>
  );
}

const SummarySectionStyle = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
  } as React.CSSProperties,
  result: {
    textAlign: 'center',
    marginTop: '5px',
  } as React.CSSProperties,
};
export default SummarySection;
