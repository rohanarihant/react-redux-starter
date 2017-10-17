import React, { Component } from 'react';
// import {Link} from 'react-router';
import { browserHistory } from 'react-router';
import * as authAction from '../actions/authAction';
import { connect } from 'react-redux';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      title: '',
      company: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstNameError: '',
      lastNameError: '',
      addressError: '',
      cityError: '',
      stateError: '',
      zipError: '',
      titleError: '',
      companyError: '',
      phoneNumberError: '',
      emailError: '',
      passwordError: '',
      formError: '',
    }
    this.updateValue = this.updateValue.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateValue(e) {
    let name = e.target.name;
    let value = e.target.value;
    let state = this.state;
    state[name] = value;
    this.setState(state);
    if (value == '' || value == null) {
      state[name + 'Error'] = 'This field is required';
      return false;
    } else {
      state[name + 'Error'] = '';
    }
    console.log(name, 'name');
    console.log(e.target.value, 'value');
  }
  numberOnly(e) {
    const re = /[0-9A-F]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
    let state = this.state;
    let name = e.target.name;
    state[name] = e.target.value;
    if (e.target.value == '' || re.test(e.target.value)) {
      this.setState(state)
    }
  }

  inputEmail(e) {
    e.preventDefault();
    let email = e.target.value;
    let atpos = email.indexOf("@");
    let dotpos = email.lastIndexOf(".");
    if ((email.length > 2) && (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length)) {
      this.setState({ emailError: 'Email is not valid', email: e.target.value });
      return false;
    } else {
      this.setState({ email: e.target.value, emailError: '' });
    }
  }
  submitForm(e) {
    e.preventDefault();
    let state = this.state;
    if (state.firstName !== '' && state.lastName !== '' && state.phoneNumber !== '' && state.email !== '' && state.password !== '') {
      this.props.register(this.state);
    } else {
      this.setState({ formError: 'Please fill out all the fields' })
    }
  }
  confirmPassword(e) {
    e.preventDefault();
    let confirmPassword = e.target.value;
    if (confirmPassword != this.state.password) {
      this.setState({ confirmPasswordError: 'Your passwords must match', confirmPassword: e.target.value, valid: false });
      return false;
    } else {
      this.setState({ confirmPassword: e.target.value, confirmPasswordError: '' });
    }
  }
  render() {
    return (
      <div className="container">
        <h1 className="well" style={{ textAlign: 'center' }}>Registration Form</h1>
        <div className="col-lg-12 well">
          <div className="row">
            <form>
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter First Name Here.." value={this.state.firstName} name="firstName" onChange={this.updateValue} className="form-control" />
                    <p style={{ color: 'red' }}>{this.state.firstNameError}</p>
                  </div>
                  <div className="col-sm-6 form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter Last Name Here.." value={this.state.lastName} name="lastName" onChange={this.updateValue} className="form-control" />
                    <p style={{ color: 'red' }}>{this.state.lastNameError}</p>
                  </div>
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea placeholder="Enter Address Here.." rows="3" value={this.state.address} name="address" onChange={this.updateValue} className="form-control"></textarea>
                  <p style={{ color: 'red' }}>{this.state.addressError}</p>
                </div>
                <div className="row">
                  <div className="col-sm-4 form-group">
                    <label>City</label>
                    <input type="text" placeholder="Enter City Name Here.." value={this.state.city} name="city" onChange={this.updateValue} className="form-control" />
                    <p style={{ color: 'red' }}>{this.state.cityError}</p>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>State</label>
                    <input type="text" placeholder="Enter State Name Here.." value={this.state.state} name="state" onChange={this.updateValue} className="form-control" />
                    <p style={{ color: 'red' }}>{this.state.stateError}</p>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Zip</label>
                    <input type="text" placeholder="Enter Zip Code Here.." value={this.state.zip} name="zip" onChange={this.numberOnly.bind(this)} className="form-control" />
                    <p style={{ color: 'red' }}>{this.state.zipError}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <label>Title</label>
                    <input type="text" placeholder="Enter Designation Here.." value={this.state.title} name="title" onChange={this.updateValue} className="form-control" />
                    <p style={{ color: 'red' }}>{this.state.titleError}</p>
                  </div>
                  <div className="col-sm-6 form-group">
                    <label>Company</label>
                    <input type="text" placeholder="Enter Company Name Here.." value={this.state.company} name="company" onChange={this.updateValue} className="form-control" />
                    <p style={{ color: 'red' }}>{this.state.companyError}</p>
                  </div>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" placeholder="Enter Phone Number Here.." value={this.state.phoneNumber} name="phoneNumber" onChange={this.numberOnly.bind(this)} className="form-control" />
                  <p style={{ color: 'red' }}>{this.state.phoneNumberError}</p>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" placeholder="Enter Email Address Here.." className="form-control" name="email" onChange={this.inputEmail} value={this.state.email} />
                  <p style={{ color: 'red' }}>{this.state.emailError}</p>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" placeholder="Enter Website Name Here.." value={this.state.password} name="password" onChange={this.updateValue} className="form-control" />
                  <p style={{ color: 'red' }}>{this.state.passwordError}</p>
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Enter Website Name Here.." value={this.state.confirmPassword} name="confirmPassword" onChange={this.confirmPassword.bind(this)} className="form-control" />
                  <p style={{ color: 'red' }}>{this.state.confirmPasswordError}</p>
                  <p style={{ color: 'red' }}>{this.state.formError}</p>
                </div>
                <button type="button" className="btn btn-lg btn-info" onClick={this.submitForm}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    register: (user) => dispatch(authAction.getRegister(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
