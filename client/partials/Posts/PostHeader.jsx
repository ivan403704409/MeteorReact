import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import HeaderItem from './HeaderItem.jsx';
// App component - represents the whole app

export default class PostHeader extends Component {
 
  
  render() {
    if (!this.props.posts) {
      return <div>loading... </div>
    }
    return (
      <div className="container">
         {this.props.posts.map((post) => (
        <HeaderItem key={post._id} item={post} />
      ))}
      
          
      </div>
    );
  }
}
