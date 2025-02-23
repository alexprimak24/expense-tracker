import React from 'react';

function SummarySection() {
  //highest spent category make it harder
  //and highest will be counted not on entries but on the amount of each category
  return (
    <section style={SummarySectionStyle.section} className="section outline">
      <div className="">
        <h2>🔋 Total Spent</h2>
        <div style={SummarySectionStyle.result}>MILLIARD</div>
      </div>
      <div className="">
        <h2>🏆 Highest Spent Category</h2>
        <div style={SummarySectionStyle.result}>SPORT</div>
      </div>
      <div className="">
        <h2>📈 Average Spent Month</h2>
        <div style={SummarySectionStyle.result}>MILLIONI</div>
      </div>
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
