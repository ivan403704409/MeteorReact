import React, {Component } from 'react';
import Header from '../partials/Header.jsx';
import Titles from '../partials/Titles.jsx';
export default class Blog extends Component {
    render() {
        return (
            <div>
                <div className="billboard">
                    <h2>Mazeal</h2>
                    <h3>Mazeal.com</h3>
                </div>
                 <Titles />
            </div>
        )
    }
}
