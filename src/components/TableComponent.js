import React from 'react'

import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Spinner } from 'reactstrap';
import { faInfo, faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true,
  headerStyle: () => {
    return { width: "5%" };
  }
}, {
  dataField: 'nama',
  text: 'Name',
  sort: true
}, {
  dataField: 'alamat',
  text: 'Alamat',
  sort: true
}, {
  dataField: "link",
  text: "Action",
  formatter: (rowContent, row) => {
    return (
      <div>
        <Link to={"detail/"+row.id}>
          <Button color="info" className="mr-2">
            <FontAwesomeIcon icon={faInfo}/> Detail
          </Button>
        </Link>
        
        <Link to={"edit/"+row.id}>
          <Button color="warning" className="mr-2">
            <FontAwesomeIcon icon={faEdit}/> Edit
          </Button>
        </Link>

        
        <Button color="danger" className="mr-2">
          <FontAwesomeIcon icon={faTrash}/> Delete
        </Button>
      </div>
    )
  }
}];

const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
}];

const { SearchBar } = Search;

const mapStateToProps = (state) => {
  return {
    getUserList: state.users.getUserList,
    errorUserList: state.users.errorUserList
  }
}
const TableComponent = (props) => {
  return (
    <Container>
       { ( props.getUserList ) ? 
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={props.getUserList}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
            <div className="row">
              <div className="col-4">
                <Link to={"create"}>
                  <Button color="info">
                    <FontAwesomeIcon icon={faUserPlus} /> Create
                  </Button>
                </Link>
              </div>
              <div className="col-4"></div>
              <div className="col-4">
                <SearchBar {...props.searchProps} placeholder="Search Data" />
              </div>
            </div>
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          </div>
        )}
      </ToolkitProvider> : 
      <div className="text-center">
        { props.errorUserList ? <h1> {props.errorUserList} </h1> :  <Spinner color="dark" /> }
      </div> 
    }
    </Container>
  );
}

export default connect(mapStateToProps, null)(TableComponent);
