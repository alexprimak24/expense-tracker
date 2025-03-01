import React from 'react';
import { TooltipProps } from 'recharts';
// for recharts v2.1 and above
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';
import A from './A';

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{label}</p>
        <p className="desc">Anything you want can be displayed here.</p>
        <A />
      </div>
    );
  }

  return <></>;
};

export default CustomTooltip;
