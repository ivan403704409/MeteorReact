import React from 'react';
export default class Inputors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.onChange = (evt) => this.setState({value: evt.target.value});
  }
  render() {
    return <input value={this.state.value} onChange={this.onChange} />;
  }
}