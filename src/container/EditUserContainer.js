import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'
import {connect} from 'react-redux';
import FormComponent from '../components/FormComponent'
import { getUserDetail } from '../actions/userAction';
import { putUserUpdate } from '../actions/userAction';
import swal from 'sweetalert';

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser
  }
}

class EditUserContainer extends Component {

  handleSubmit(data) {
    this.props.dispatch(putUserUpdate(data, this.props.match.params.id))
  }

  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }

  render() {
    if(this.props.getResponDataUser || this.props.errorResponDataUser) {
      if(this.props.errorResponDataUser) {
        swal("User Updated Failed!", this.props.errorResponDataUser, "error");
      } else {
        swal("User Updated!", this.props.getResponDataUser.nama, "success");
      }
    }

    return (
      <div>
        <Container>
          <BackComponent/>
          <h1>Edit User</h1>
          <FormComponent onSubmit={(data) => this.handleSubmit(data)}/>
        </Container>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(EditUserContainer)