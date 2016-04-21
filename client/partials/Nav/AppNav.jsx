import React, {component} from 'react';

export default class AppNav extends React.Component {
    render() {
        return (
            <div className="app-nav">
                <ul>
                    <li><a href="/"><i className="fa fa-dashboard"></i> <span>仪表盘</span></a></li>
                    <li><a href="/"><i className="fa fa-users"></i> <span>用户管理</span></a></li>
                    <li><a href="/"><i className="fa fa-rss"></i> <span>博客管理</span></a></li>
                    <li><a href="/logout"><i className="fa fa-adn"></i> <span>退出</span></a></li>
                </ul>
            </div>
        )
    }
}