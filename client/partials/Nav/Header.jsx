import React, {Component} from 'react';
import MainNav from './MainNav.jsx';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="site-title"><a href="/">
                    <img alt="Mazeal Logo" src="/logo.svg" height="30" />
                </a></h1>
                <MainNav />
            </header>
        )
    }
}