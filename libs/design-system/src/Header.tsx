import React from 'react';
import { MenuItem } from './components/MenuItem';

export const Header = () => {
  return <div>{['home', 'about'].map((t) => (
    <MenuItem text={t} />
  ))}</div>
};
