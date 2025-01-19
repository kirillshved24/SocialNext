'use client';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import {AppLayout} from '@/app/components/Layout'; // Импортируйте ваш AppLayout

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <BrowserRouter> {/* Оберните приложение в BrowserRouter */}
            <AppLayout />
          </BrowserRouter>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;