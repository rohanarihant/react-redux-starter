import React, { Component } from 'react';
// import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import * as authAction  from '../actions/authAction';
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        email:'',
        password:'',
        emailError:'',
        loginError:''
    }
  }

  inputEmail(e){
         e.preventDefault();
         let email = e.target.value;
         let atpos = email.indexOf("@");
         let dotpos = email.lastIndexOf(".");
         if((email.length> 2) && ( atpos<1 || dotpos < atpos+2 || dotpos+2>=email.length)){
           this.setState({emailError : 'Email is not valid',email:e.target.value});
              return false;
         } else{
              this.setState({email:e.target.value,emailError:''});
         }
    }
  inputPassword(e){
    this.setState({password:e.target.value});
  }
  submitForm(e){
    e.preventDefault();
    // if((this.state.email && this.state.password !== null) && (this.state.emailError === '')){
    //   this.props.login(this.state);
    // }
    console.log('submitForm')
    let props = this.props;
    if(this.state.email != props.registeredUser.email && this.state.password != props.registeredUser.password ){
        this.setState({loginError:'Invalid Credentials'})
    }else{
      this.props.login(this.state);
    }
  }
  render(){
    console.log(this.state)
    return(
      <div className="contRegisterainer">
      <form className="forRegisterm-signin">
      <h2 className="form-signin-heading">Please sign in</h2>
      <label htmlFor="inputEmail" className="sr-only">Email address</label>
      <input type="email" id="inputEmail" className="form-control" onChange={this.inputEmail.bind(this)} placeholder="Email address" required="" autoFocus="" />
      <span>{this.state.emailError}</span>
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword" className="form-control" onChange={this.inputPassword.bind(this)} placeholder="Password" required="" />
      <div className="checkbox">
        <p style={{textAlign:'center',color:'red'}}>{this.state.loginError}</p>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.submitForm.bind(this)}>Sign in</button>
      </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state,'state in login')
  return {
    registeredUser: state.authReducer.registerData
  };
};
const mapDispatchToProps = (dispatch) => {
    return {
          login: (user) => dispatch(authAction.getLogin(user))
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
