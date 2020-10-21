import React from 'react'
import {connect} from 'react-redux';
import { Table } from 'reactstrap'

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail
  }
}

const DetailUserComponent = (props) => {
  return (
    <Table>
      <tbody>
        <tr>
          <td>Nama</td>
          <td>:</td>
          <td>{ props.getUserDetail.nama }</td>
        </tr>
        <tr>
          <td>Alamat</td>
          <td>:</td>
          <td>{ props.getUserDetail.alamat }</td>
        </tr>
        <tr>
          <td>Umur</td>
          <td>:</td>
          <td>{ props.getUserDetail.umur }</td>
        </tr>
        <tr>
          <td>Nomor HP</td>
          <td>:</td>
          <td>{ props.getUserDetail.nohp }</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default connect(mapStateToProps, null)(DetailUserComponent)
