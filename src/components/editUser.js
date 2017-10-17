import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userAction  from '../actions/userAction';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      valid: false,
      showAddUser: false,
    };
    this.inputEmail = this.inputEmail.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.numberOnly = this.numberOnly.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  componentWillMount(){
    let editableUserId = this.props.editableUser;    
    let editableUserData = null;
    if(this.props){
      editableUserData = this.props.userLists.map((obj, index) => {
        if(index === editableUserId){
          this.setState(obj);
        }
    
          })
    }
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
    this.checkValid();
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
    this.checkValid();
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
    this.checkValid();
  }
  checkValid() {
    let state = this.state;
    if (state.email != '' && state.lastName != '' && state.phoneNumber != '' && state.firstName != '') {
      this.setState({ valid: true });
    }
  }
  submitForm() {
      let obj = {};
      obj['id']=this.props.editableUser;
      obj['firstName']=this.state.firstName;
      obj['lastName']=this.state.lastName;
      obj['phoneNumber']=this.state.phoneNumber;
      obj['email']=this.state.email;
      this.props.updateUser(obj);
  }
  render() {

    return (
      <div className="container">
        <h1 className="well" style={{ textAlign: 'center' }}>Add User</h1>
        <div className="col-lg-12 well">
          <div className="row">
            <form>
              <div className="col-sm-12">
                <div className="row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" value={this.state.firstName} name="firstName" onChange={this.updateValue.bind(this)} className="form-control" />
                    <p style={{ color: 'red' }}>{this.state.firstNameError}</p>
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" className="form-control" name="lastName" onChange={this.updateValue} value={this.state.lastName} />
                    <p style={{ color: 'red' }}>{this.state.lastNameError}</p>
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" placeholder="Phone Number" value={this.state.phoneNumber} name="phoneNumber" onChange={this.numberOnly} className="form-control" />
                    <p style={{ color: 'red' }}>{this.state.phoneNumberError}</p>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" placeholder="Email" value={this.state.email} name="email" onChange={this.inputEmail.bind(this)} className="form-control" />
                    <p style={{ color: 'red' }}>{this.state.emailError}</p>
                    <p style={{ color: 'red' }}>{this.state.formError}</p>
                  </div>
                  {this.state.valid ? <button type="button" className="btn btn-lg btn-info" onClick={this.submitForm}>Submit</button> : <button type="button" className="btn btn-lg btn-info disabled" onClick={this.submitForm}>Submit</button>}

                </div>
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
      userLists: state.userReducer.userList
  };
};
  const mapDispatchToProps = (dispatch) => {
      return {
        updateUser: (user) => dispatch(userAction.updateUser(user))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditUser);
