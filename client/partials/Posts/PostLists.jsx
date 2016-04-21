import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import reactMixin from 'react-mixin'; 
import PostHeader from './PostHeader.jsx';
// App component - represents the whole app

export default class PostLists extends Component {
 
  getMeteorData() {
    console.log('hello');
    Meteor.subscribe('posts');
    const posts = Posts.find().fetch();
    return {posts};
  }
  render() {
    if (!this.data.posts) {
      return <div>loading... </div>
    }
    console.log(this.data.posts);
    return (
      <div className="container">
       <PostHeader posts={this.data.posts}/>          
      </div>
    );
  }
}
reactMixin.onClass(PostLists, ReactMeteorData)