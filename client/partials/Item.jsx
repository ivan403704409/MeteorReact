import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Item extends Component {
	toggleChecked() {
    // Set the checked property to the opposite of its current value
     Meteor.call('Items.setChecked', this.props.item._id, !this.props.item.checked);
  }
 
  delete() {
   Meteor.call('items.remove', this.props.item._id);
  }
  render() {
  	// Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const itemClassName = this.props.item.checked ? 'checked' : '';
    return (
      <li className={itemClassName}>
      		<button className="delete" onClick={this.delete.bind(this)}>
         	 &times;
        	</button>
        	<input
          		type="checkbox"
          		readOnly
          		checked={this.props.item.checked}
          		onClick={this.toggleChecked.bind(this)}
        	/>
       		<span className="text">
          <strong>{this.props.item.username}</strong>: {this.props.item.text}
        </span>
       </li>
    );
  }
}
 
Item.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  item: PropTypes.object.isRequired,
};