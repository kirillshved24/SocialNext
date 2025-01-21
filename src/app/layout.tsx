'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { AppLayout } from '@/app/components/Layout';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AppLayout>{children}</AppLayout> 
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;