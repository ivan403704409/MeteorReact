import React, {Component } from 'react';
import Header from '../../partials/Nav/Header.jsx';
import Comments from '../../partials/Comments/Comments.jsx';
export default class Blog extends Component {
    render() {
        Meteor.subscribe('items');
        return (
            <div>
                <div className="billboard">
                    <h2>Mazeal</h2>
                    <h3>Mazeal.com</h3>
                </div>
                 <Comments />
            </div>
        )
    }
}
