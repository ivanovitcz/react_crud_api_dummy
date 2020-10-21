import React, { Component } from 'react'
import TableComponent from '../components/TableComponent'
import {connect} from 'react-redux';
import { getUserList, deleteUserDetail, deleteDataUser } from "../actions/userAction";

class HomeContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getUserList())
    this.props.dispatch(deleteUserDetail())
    this.props.dispatch(deleteDataUser())
  }

  render() {
    return (
      <div>
        <TableComponent />
      </div>
    )
  }
}

export default connect()(HomeContainer)