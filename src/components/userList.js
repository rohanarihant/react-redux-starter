import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
  }
  this.addOne = this.addOne.bind(this);
}

addOne(){
    this.props.addUser();
}

enableEditUser(id){
    this.props.toggleUserList(id);
}
  render() {
    console.log(this.state,'my state')
    console.log(this.props,'my props')
    let userList = null;
    if(this.props){
        userList = this.props.userLists.map((obj, index) => {
            return (
              <tr>
                <td>{obj.firstName}</td>
                <td>{obj.lastName}</td>
                <td>{obj.phoneNumber}</td>
                <td>{obj.email}</td>
                <td><span className="glyphicon glyphicon-pencil" onClick={this.enableEditUser.bind(this,index)}/></td>
              </tr>
            )
          })
    }

    return (
      <div className="container">
        <h2 className="center">User list</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {userList}
            </tbody>
            <button className="btn btn-primary center" onClick={this.addOne}>Add User</button>
          </table>
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

  
  export default connect(
    mapStateToProps,
  )(UserList);
  

