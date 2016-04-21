import React from 'react';
import Header from '../partials/Nav/Header.jsx';
export const HomeLayout = ({content}) => (
    <div>
        <Header />
        <main className="home-layout">
            {content()}
        </main>
        <footer className="site-footer">
        </footer>
    </div>
)