import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import reactMixin from 'react-mixin'; 
import CommentList from './CommentList.jsx';
import CommentBox from './CommentBox.jsx';
// App component - represents the whole app

export default class Comments extends Component {
 
  getMeteorData() {
    console.log('hello');
    Meteor.subscribe('items');
    const items = Items.find().fetch();
    return {items};
  }
  render() {
    if (!this.data.items) {
      return <div>loading... </div>
    }
    console.log(this.data.items);
    return (
      <div className="container">
       <CommentList items={this.data.items}/> 
      {Meteor.userId()?<CommentBox/> :<a>登录后才能添加评论</a>}
          
      </div>
    );
  }
}
reactMixin.onClass(Comments, ReactMeteorData)