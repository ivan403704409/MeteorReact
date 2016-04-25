import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class HeaderItem extends Component {
   	render() {
   		
    return <li>
      	<span className="text">
          <h2><strong>{this.props.post.title}</strong></h2>
          <a>作者:</a>{this.props.post.username}
          <br />
          <br />
          <a>写于:</a>{this.props.post.createdAt.toString()}
        </span>
       </li>;
  }
}
 