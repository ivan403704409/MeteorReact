import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import Account from './Account.jsx';
export default class MainNav extends Component {
      render() {
        return (
            <nav className="main-nav">
              
                        
                    
                <ul>
                <li>
                		<i className="fa fa-home"></i><a href="/" >首页</a>
                </li>
                 <li>
                        <a href="/blog" >博客</a>
                 </li>
                 <li>
                        <a href="/about" >关于</a>
                </li>
                <li>
                         <i className="fa fa-user" aria-hidden="true"></i><Account />
                </li>
                </ul>
            </nav>
        )
    }
}

