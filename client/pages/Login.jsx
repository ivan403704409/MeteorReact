import React, {Component} from 'react';
import Header from '../partials/Header.jsx';
import { Accounts } from 'meteor/std:accounts-ionic';
Accounts.ui.config({
  loginPath: '/login',
  onSignedInHook: () => FlowRouter.go('/'),
  onSignedOutHook: () => FlowRouter.go('/')
});

export default class Login extends Component {
  
    render() {
        return (
            <div>
                <div className="billboard">
                    <h2>Mazeal</h2>
                    <h3>Mazeal.com</h3>
                </div>    
                <div>
                      <Accounts.ui.LoginForm />
                </div>
            </div>
        )
    }
};
//login
FlowRouter.route('/login', {
    name: 'login',
    action() {
        mount(HomeLayout, {
            content: () => (<Login />)
        });
    }
});