import React from 'react';

interface MenuItemProps {
  text: string;
}

export const MenuItem = ({ text }: MenuItemProps) => {
  return <span style={{ marginLeft: 20 }}>{text}</span>;
};
