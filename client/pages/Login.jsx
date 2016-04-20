import React, {Component} from 'react';
import Header from '../partials/Header.jsx';

export default class Login extends Component {
  //   constructor(props){
  //       super(props){
  //           super(props);
  //           this.handleChange   = this.handleChange.bind(this);
  //           this.controlInputs  = this.controlInputs.bind(this);
  //           this.login          = this.login.bind(this);
  //           this.onLoginError   = this.onLoginError.bind(this);
  //           this.onLoginSuccess = this.onLoginSuccess.bind(this);
  //           this.setErrorText   = this.setErrorText.bind(this);
  //           his.resetErrorText = this.resetErrorText.bind(this);
  //           this.toggleRoll = this.toggleRoll.bind(this);
  //           this.openRoll = this.openRoll.bind(this);
  //           this.closeRoll = this.closeRoll.bind(this);
  //           this.state = {
  //               username: '',
  //               password: '',
  //               usernameErrorText: '', 
  //               passwordErrorText: '',
  //               timeout: 3500
  //           };
  //       }
  //   }
  //   getMeteorData() {
  //   return { 
  //     user: Meteor.user(),
  //     loggingIn: Meteor.loggingIn(),
  //   }
  // }
  // onLoginSuccess(){
  //   console.log('Login success : ')
  //   return; // debug
  //   //this.props.openSnackBar('Welcome home dear '+this.getMeteorData().user.username);
  //   //browserHistory.push('/home');
  // }
    
  // onLoginError(error){

  //   console.log('Login Error : ' + error.reason + ', ' + error.error);
    
  //   if(error.reason === 'User not found'){ 
  //     this.setErrorText('username', error.reason);
  //   }
  //   else if(error.reason === 'Incorrect password'){ 
  //     this.setErrorText('password', error.reason);
  //   }
  //   else{
  //     // TODO : normally not needed, have to check
  //     this.setErrorText('outside', error.reason);
  //   }
    
  // }

  // // Inputs
  
  // handleChange(event){
    
  //   var inputName = event.target.name;
  //   var value     = event.target.value;
    
  //   var nextState  = {};
  //   nextState[inputName] = value;
  //   nextState[inputName+'errorText'] = '';
    
  //   this.setState(nextState);
  // }  
  
  // setErrorText(inputName, text){
  //   var nextState = {};
  //   nextState[inputName+'ErrorText'] = text;
  //   this.setState(nextState);
    
  //   this.resetErrorText(inputName, this.state.timeout);
  // }
    
  // resetErrorText(inputName, delay){
  //   var nextState = {};
    
  //   if(delay){
  //     setTimeout(()=>{
  //       nextState[inputName+'ErrorText'] = '';
  //       this.setState(nextState)
  //     }, delay);
  //   }
  //   else{
  //     nextState[inputName+'ErrorText'] = '';
  //     this.setState(nextState);
  //   }
  // }
            
  // controlInputs(callback) {
    
  //   var username = this.state.username;
  //   var password = this.state.password;
    
  //   // Control empty inputs
  //   if(username == '' || username == ' '){
  //     this.setErrorText("username", 'Empty field');
  //     return;
  //   }
  //   if(password == '' || password == ' '){
  //     this.setErrorText("password", 'Empty field');
  //     return;
  //   }
  //   if(username == '' || username == ' ' || password == '' || password == ' '){
  //     return
  //   }
    
  //   callback(username, password);
    
  // }   
  
   
  // // Toggle Roll
  
  // toggleRoll() {
  //   this.setState({ isRollOpen: !this.state.isRollOpen });
  // }
    
  // openRoll() {
  //   this.setState({ isRollOpen: true });
  // }
  
  // closeRoll() {
  //   this.setState({ isRollOpen: false});
  // }

    render() {
        return (
            <div>
                <div className="billboard">
                    <h2>Mazeal</h2>
                    <h3>Mazeal.com</h3>
                    
                <div>
                        <a>账号：</a><input /><p/>
                        <a>密码：</a><input /><p/>

                    <a href='#' className="btn">Login</a>
                    <p />
                    <a>还没有账号？</a><a href="/signup">注册</a>
                    </div>
                    </div>
            </div>
        )
    }
}