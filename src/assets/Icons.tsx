import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LanguageIcon from '@mui/icons-material/Language';
import DehazeIcon from '@mui/icons-material/Dehaze';
import React, { ReactNode } from 'react';
import { CATEGORIES } from '../types';

export const CategoryIcons: Record<CATEGORIES, ReactNode> = {
  [CATEGORIES.Food]: <FastfoodIcon />,
  [CATEGORIES.Shopping]: <ShoppingCartIcon />,
  [CATEGORIES.Transport]: <DirectionsBusIcon />,
  [CATEGORIES.Housing]: <HomeIcon />,
  [CATEGORIES.Entertainment]: <SportsEsportsIcon />,
  [CATEGORIES.OnlineServices]: <LanguageIcon />,
  [CATEGORIES.Others]: <DehazeIcon />,
};
