import React from 'react';

const MENUS = ['Home','About', 'People', 'Leave'];

export const Sidebar = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 200,
        height: '100%',
        padding: 10,
        backgroundColor: 'greenyellow',
      }}
    >
      {MENUS.map((m) => <div style={{padding: 5}}>{m}</div>)}
    </div>
  );
};
