import React from 'react';
import { MenuItem } from './components/MenuItem';

export const Header = () => {
  return (
    <div
      style={{
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'aqua'
      }}
    >
      <div>logo</div>
      <div>
        {['home', 'about', 'login'].map((t) => (
          <MenuItem text={t} />
        ))}
      </div>
    </div>
  );
};
