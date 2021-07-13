import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Siderbar';

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ position: 'relative', height: 'calc(100vh - 60px)', padding: 10 }}>
        <Sidebar />
        {children}
        <div>4</div>
      </div>
    </div>
  );
};
