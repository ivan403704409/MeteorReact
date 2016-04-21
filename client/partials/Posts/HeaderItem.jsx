import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class HeaderItem extends Component {
   	render() {
    return (
      <li>
      	<span className="text">
          <h2><strong>{this.props.post.title}</strong></h2>
          <br/>
          <h4>作者:</h4><h6> {this.props.post.username}   </h6>
          <h4>写于:</h4><h6> {this.props.post.createdAt}   </h6>
        </span>
       </li>
    );
  }
}
 