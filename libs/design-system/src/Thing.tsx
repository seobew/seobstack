import React from 'react';

export const Thing: React.FC = ({ children }) => {
  return <div>{children || `testing comp`}</div>;
};