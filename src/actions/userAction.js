import axios from "axios";


export const GET_USER_LIST = "GET_USER_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const PUT_USER_EDIT = "PUT_USER_EDIT";


export const getUserList = () => {
  return dispatch => {
    axios
      .get("http://my-json-server.typicode.com/ivanovitcz/reactjs-redux-fakeapi/users")
      .then(function (response) {
        dispatch({
          type: GET_USER_LIST,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
        // handle success
        // console.log(response);
      })
      .catch(function (error) {
        dispatch({
          type: GET_USER_LIST,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
        // handle error
        // console.log(error);
      })
  }
}

export const getUserDetail = (id) => {
  return dispatch => {
    axios
      .get("http://my-json-server.typicode.com/ivanovitcz/reactjs-redux-fakeapi/users/"+id)
      .then(function (response) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
        // handle success
        // console.log(response);
      })
      .catch(function (error) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
        // handle error
        // console.log(error);
      })
  }
}


export const deleteUserDetail = () => {
  return dispatch => {
    dispatch({
      type: GET_USER_DETAIL,
      payload: {
        data: false,
        errorMessage: false
      }
    })
  }
}

export const postUserCreate = (data) => {
  return dispatch => {
    axios
      .post("http://my-json-server.typicode.com/ivanovitcz/reactjs-redux-fakeapi/users",
      data)
      .then(function (response) {
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
        // handle success
        // console.log(response);
      })
      .catch(function (error) {
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
        // handle error
        // console.log(error);
      })
  }
}

export const deleteDataUser = () => {
  return dispatch => {
    dispatch({
      type: GET_USER_DETAIL,
      payload: {
        data: false,
        errorMessage: false
      }
    })

    dispatch({
      type: POST_USER_CREATE,
      payload: {
        data: false,
        errorMessage: false
      }
    })
  }

  
}

export const putUserUpdate = (data, id) => {
  return dispatch => {
    axios
      .put("http://my-json-server.typicode.com/ivanovitcz/reactjs-redux-fakeapi/users/"+id,
      data)
      .then(function (response) {
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
        // handle success
        // console.log(response);
      })
      .catch(function (error) {
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
        // handle error
        // console.log(error);
      })
  }
}