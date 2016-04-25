import React, { Component } from 'react';
export default class Selector extends Component {
    render() {
        return (
          <form >
          <div>
          	分类：
			<select size="1" id="select" name="select">
				<option sel="life">生活</option>
				<option sel="technology">技术</option>
				<option sel="thought">思考</option>
			</select>
			标签: 
			<input  />
			</div>
		  	<div>
			
			</div>
			<div>
			提交:
			<input type="submit" value="submit" id="submit" name="submit" />
			</div>
		</form>
        )
    }
}