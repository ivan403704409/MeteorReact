import React, {Component} from 'react';

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
                    {Meteor.userId()?<li><a href="/logout"><i className="fa fa-user-times" aria-hidden="true"></i>Logout</a></li>:<li><a href="/login"><i className="fa fa-user" aria-hidden="true"></i>Login</a></li>}
                </ul>
            </nav>
        )
    }
}

