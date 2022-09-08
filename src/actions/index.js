import dummyApi from "../apis/dummyApi";

export const fetchUsers = () => async (dispatch) => {
  const response = await dummyApi.get("/user?page=1&limit=50");

  dispatch({ type: "FETCH_USERS", payload: response.data.data });
};

export const createUser = (fname, lname, mail) => async (dispatch) => {
  const response = await dummyApi.post("/user/create", {
    firstName: fname,
    lastName: lname,
    email: mail,
  });

  dispatch({ type: "CREATE_USER", payload: response });
};

export const deleteUser = (id) => async (dispatch) => {
  const response = await dummyApi.delete(`/user/${id}`);


  dispatch({ type: "DELETE_USER", payload: response });
};

export const updateUser = (id, fname, lname) => async (dispatch) => {
  const response = await dummyApi.put(`/user/${id}`, {
    firstName: fname,
    lastName: lname,
  });


  dispatch({ type: "UPDATE_USER", payload: response });
};

export const getEditedId = (id) => {
  return {
    type: "GET_EDIT_ID",
    payload: id,
  };
};
