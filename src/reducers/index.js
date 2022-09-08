import { combineReducers } from "redux";

const fetchUsersReducer = (state = [], action) => {
  if (action.type === "FETCH_USERS") {
    return action.payload;
  }
  return state;
};
const createUserReducer = (state = [], action) => {
  if (action.type === "CREATE_USER") {
    return action.payload;
  }
  return state;
};
const deleteUserReducer = (state = [], action) => {
  if (action.type === "DELETE_USER") {
    return action.payload;
  }
  return state;
};
const UserId = (state = "", action) => {
  if (action.type === "GET_EDIT_ID") {
    return action.payload;
  }
  return state;
};

const updateUserReducer = (state = [], action) => {
  if (action.type === "UPDATE_USER") {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  users: fetchUsersReducer,
  updatedUser: updateUserReducer,
  createdUser: createUserReducer,
  deletedUser: deleteUserReducer,
  editUserId: UserId,
});
