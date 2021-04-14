import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch) => {
    const response = await axios
      .create({
        baseURL: "https://jsonplaceholder.typicode.com/",
      })
      .get("/users");

    dispatch({ type: "FETCH_USERS", payload: response.data });
  };
};

export const fetchUserPosts = () => {
  return async (dispatch) => {
    const response = await axios
      .create({ baseURL: "https://jsonplaceholder.typicode.com/" })
      .get("posts?userId=1");

    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
