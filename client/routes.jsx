import React from 'react';
import {mount} from 'react-mounter';
import {HomeLayout} from './layouts/HomeLayout.jsx';
import {AppLayout} from './layouts/AppLayout.jsx';

import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        mount(HomeLayout, {
            content: () => (<Home />)
        });
    }
});
//login
FlowRouter.route('/login', {
    name: 'login',
    action() {
        mount(HomeLayout, {
            content: () => (<Login />)
        });
    }
});
//signup
FlowRouter.route('/signup', {
    name: 'signup',
    action() {
        mount(HomeLayout, {
            content: () => (<Signup />)
        });
    }
});
//blog
FlowRouter.route('/blog', {
    name: 'blog',
    action() {
        mount(HomeLayout, {
            content: () => (<Blog />)
        });
    }
});
//about
FlowRouter.route('/about', {
    name: 'about',
    action() {
        mount(HomeLayout, {
            content: () => (<About />)
        });
    }
});
// Dashboard Page
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        mount(AppLayout, {
            content: () => (<Dashboard />)
        });
    }
});