import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import CommentItem from './CommentItem.jsx';
// App component - represents the whole app

export default class CommentList extends Component {
 
  
  render() {
    if (!this.props.items) {
      return <div>loading... </div>
    }
    return (
      <div className="container">
         {this.props.items.map((item) => (
        <CommentItem key={item._id} item={item} />
      ))}
      
          
      </div>
    );
  }
}
