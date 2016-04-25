import React ,{ Component}from 'react';
 import ReactDOM from 'react-dom'; 
// Task component - represents a single todo item
export default class Comment extends Component {
 
  handleSubmit(event) {
    event.preventDefault();
  console.log(this);
    // Find the text field via the React ref
    const text = this.refs.textInput.value.trim();
 
    Meteor.call('items.insert', text);
    console.log('insert');
        // Clear form
    this.refs.textInput.value = '';

  }

   	render() {
    return (
        <div>
        
            <form className="new-item" onSubmit={this.handleSubmit.bind(this)}>
              <input 
                type="text"
                ref="textInput"
                placeholder="输入您的评论"
              ></input>
            </form>
        </div>
    );
  }
}