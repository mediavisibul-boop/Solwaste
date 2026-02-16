import React from 'react';
import { MinimalNavigation } from './MinimalNavigation';
import { MinimalFooter } from './MinimalFooter';

export const MinimalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <MinimalNavigation />
      <main style={{ padding: 0, margin: 0 }}>{children}</main>
      <MinimalFooter />
    </div>
  );
};
