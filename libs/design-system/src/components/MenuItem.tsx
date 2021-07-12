import React from 'react';

interface MenuItemProps {
  text: string;
}

export const MenuItem = ({ text }: MenuItemProps) => {
  return <menu>{text}</menu>;
};
