import React, {Component} from 'react';
import Header from '../../partials/Nav/Header.jsx';
import PostLists from '../../partials/Posts/PostLists.jsx';
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="billboard">
                    <h2>Mazeal</h2>
                    <h3>Mazeal.com</h3>
                </div>
                <PostLists />
            </div>
        )
    }
}