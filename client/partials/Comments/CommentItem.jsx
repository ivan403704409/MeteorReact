import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class CommentItem extends Component {
   	render() {
    return (
      <li>
      	<span className="text">
          <strong>{this.props.item.username}</strong>: {this.props.item.text}
        </span>
       </li>
    );
  }
}
 