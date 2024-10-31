import React, { ReactNode } from 'react';
import { Sidebar } from '../layouts/sidebar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <Sidebar/>
    <main className='main'>  
      {children}
    </main>
    </>
  );
};
