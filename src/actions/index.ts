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

export const fetchUserPosts = (id) => {
  return async (dispatch) => {
    const response = await axios
      .create({ baseURL: "https://jsonplaceholder.typicode.com/" })
      .get(`posts?userId=${id}`);

    dispatch({ type: "FETCH_USER_POSTS", payload: response.data });
  };
};
