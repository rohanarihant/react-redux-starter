import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from './userList';
import AddUser from './addUser';
import EditUser from './editUser';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      valid: false,
      showUserList: true,
      enableEditUser: false,
      editUserId:null,
    };
    this.inputEmail = this.inputEmail.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.numberOnly = this.numberOnly.bind(this);
    this.addUser = this.addUser.bind(this);
    this.enableUserList = this.enableUserList.bind(this);
    this.toggleUserList = this.toggleUserList.bind(this);
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
  submitForm(e) {
    e.preventDefault();
    this.addNewUser(this.state);
  }
  addUser() {
    console.log('addUser')
    this.setState({ showUserList: false });
  }

  enableUserList() {
    console.log('addUser')
    this.setState({ showUserList: true });
  }
  toggleUserList(id) {
    console.log('addUser')
    this.setState({ enableEditUser: !this.state.enableEditUser ,editUserId:id});
  }
  render() {
    console.log(this.state,'state state')
    return (
      <div className="container">
        {this.state.showUserList ? <UserList addUser={this.addUser}  toggleUserList={(id)=> {this.toggleUserList(id)}} />:<AddUser enableUserList={this.enableUserList} />}
        {this.state.enableEditUser? <EditUser editableUser = {this.state.editUserId} toggleUserList={this.toggleUserList}/>:<div></div>}
      </div>

    )
  }
}


