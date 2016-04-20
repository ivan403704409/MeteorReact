import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'; 
import Item from './Item.jsx';

// App component - represents the whole app
export default class Titles extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hideCompleted: false,
    };
  }
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    Meteor.call('items.insert', text);
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
 toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }
 
  getItems() {
    return [
      {_id: 1, text:'NO.1'},
      {_id: 2, text:'NO.2'},
      {_id: 3, text:'NO.3'},
    ];
  }
 
  renderItems() {
    let filteredItems = this.props.items;
    if (this.state.hideCompleted) {
      filteredItems = filteredItems.filter(item => !item.checked);
    }
    return Items.find().fetch().map((item) => (
      <Item key={item._id} item={item} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Blog({Items.find({ checked: { $ne: true } }).count()})</h1>
        </header>
        

        <ul>
          {this.renderItems()}
        </ul>
        <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
          </label>
          { Meteor.user()?
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new tasks"
              />
            </form>:<div>你必须登录才能添加</div>
           }
      </div>
    );
  }
}