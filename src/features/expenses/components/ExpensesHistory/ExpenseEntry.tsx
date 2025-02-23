import React, { ReactNode } from 'react';
import { Entry, Categories } from '../../../../types';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LanguageIcon from '@mui/icons-material/Language';
import DehazeIcon from '@mui/icons-material/Dehaze';

interface ExpensesEntryProps {
  expense: Entry;
}

const CategoryIcons: Record<Categories, ReactNode> = {
  [Categories.Food]: <FastfoodIcon />,
  [Categories.Shopping]: <ShoppingCartIcon />,
  [Categories.Transport]: <DirectionsBusIcon />,
  [Categories.Housing]: <HomeIcon />,
  [Categories.Entertainment]: <SportsEsportsIcon />,
  [Categories.OnlineServices]: <LanguageIcon />,
  [Categories.Others]: <DehazeIcon />,
};
//TODO
// SEND IT TO HELPERS FUNCTIONS

//THIS HOW BY ADDING ENTRY HANDLE DATE
//MAYBE USE SOME HOOK FOR CONVERTING DATE FROM NUMBER TO THE HUMAN READABLE FORM
// OR
// dhm HOOK CHANGE TO THE WAY IT WOULD BE EASIER TO USE WITH THE USER INPUT
function dhm(date: number) {
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

function HistoryEntry({ expense }: ExpensesEntryProps) {
  const { category, amount, date, currency, comment } = expense;

  return (
    <div style={HistoryEntryStyle.entry}>
      <span>{CategoryIcons[category]}</span>
      <div>{amount + ' ' + currency}</div>
      <div>{dhm(Date.parse(date.toString()))}</div>
      <button className="button button--entry">✏️</button>
      <button className="button button--entry button--entry--spaced">❌</button>
    </div>
  );
}

const HistoryEntryStyle = {
  entry: {
    display: 'grid',
    gridTemplateColumns: '20px 1fr 1fr 40px 40px',
    minWidth: '100%',
  } as React.CSSProperties,
};

export default HistoryEntry;
