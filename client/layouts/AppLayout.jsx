import React from 'react';
import Header from '../partials/Nav/Header.jsx';
import AppNav from '../partials/Nav/AppNav.jsx';

export const AppLayout = ({content}) => (
    <div>
        <Header />
        <AppNav />
        <main className="app-layout">
            {content()}
        </main>
        <footer className="site-footer">
        </footer>
    </div>
)