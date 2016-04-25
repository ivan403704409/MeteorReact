import React, {Component} from 'react';
import Editors from '../../partials/Editor/Editors.jsx';
import Selector from '../../partials/Editor/Selector.jsx';
export default class BlogEdit extends Component {
  _handleClick () {
    /* eslint-disable no-alert */
    alert('这个是自定义按钮')
    /* eslint-enable no-alert */
  }
    render() {
        return (
        	<div>
        		<a>题目：</a>
        		<input /><br /><br />
        		<a>作者：</a>
        		<input />
              <Editors>
          <option title="自定义按钮" onClick={this._handleClick}><i className="fa fa-bomb"></i></option>
        </Editors>
               <Selector />
              </div>
        )
    }
}