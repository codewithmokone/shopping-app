import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { Provider } from 'react-redux';
import store from './store/store';

const RootLayout = () => {
  return (
    <Provider store={store}>
    <div>
        <header>
            <Navigation />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
    </Provider>
  )
}

export default RootLayout