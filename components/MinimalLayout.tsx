import React from 'react';
import { MinimalNavigation } from './MinimalNavigation';
import { MinimalFooter } from './MinimalFooter';

export const MinimalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <MinimalNavigation />
      <main className="pt-16 lg:pt-20 max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-8 xl:px-12 2xl:px-20" style={{ padding: 0, margin: 0 }}>{children}</main>
      <MinimalFooter />
    </div>
  );
};
