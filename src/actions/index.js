import dummyApi from "../apis/dummyApi";

export const fetchUsers = () => async (dispatch) => {
  const response = await dummyApi.get("/user");

  dispatch({ type: "FETCH_USERS", payload: response.data });
};
