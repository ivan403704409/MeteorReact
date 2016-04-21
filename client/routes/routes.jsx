import React from 'react';
import {mount} from 'react-mounter';
import {HomeLayout} from '../layouts/HomeLayout.jsx';
import {AppLayout} from '../layouts/AppLayout.jsx';

import Home from '../pages/front/Home.jsx';
import Dashboard from '../pages/back/Dashboard.jsx';
import Blog from '../pages/front/Blog.jsx';
import About from '../pages/front/About.jsx';
// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        mount(HomeLayout, {
            content: () => (<Home />)
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