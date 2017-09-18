import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps,'nextProps');
  //   // this.setState({academicProgress : nextProps.academicProgress})
  // }

  render(){
    return(
      <div className="container">
      <h2 className="form-signin-heading">Home Component</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.registerReducer.loginData
  };
};

export default connect(
  mapStateToProps,
)(Home);
