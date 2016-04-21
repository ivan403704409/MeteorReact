import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import HeaderItem from './HeaderItem.jsx';
// App component - represents the whole app

export default class PostHeader extends Component {
 
  
  render() {
    
    return (
      <div className="container">
      <ul>{this.props.posts.map((post) => (
        <HeaderItem key={post._id} post={post} />
      ))}</ul>
          
      </div>
    );
  }
}
