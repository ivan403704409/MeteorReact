import React, {Component} from 'react';
import Header from '../partials/Header.jsx';

export default class Singup extends Component {
        render() {
        return (
            <div>
                <div className="billboard">
                    <h2>Mazeal</h2>
                    <h3>Mazeal.com</h3>
                   
                <div>
                <p/><p />
                        <a>账号：</a><input />
                        <p/>
                          <a>密码：</a><input />
                          <p/>
                          <a>再次输入密码：</a><input />
                          <p/>

                    <a href='#' className="btn">SingUp</a>
                    <p />
                    <a>已有账号？<a href="/login">登录</a></a>
                    </div>
                    </div>
            </div>
        )
    }
}