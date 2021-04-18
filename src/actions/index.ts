import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_USERS, FETCH_USER_POSTS, DispatchTypes } from "./types";

export const fetchUsers = () => async (dispatch: Dispatch<DispatchTypes>) => {
  const response = await axios
    .create({
      baseURL: "https://jsonplaceholder.typicode.com/",
    })
    .get("/users");

  dispatch({ type: FETCH_USERS, payload: response.data });
};

export const fetchUserPosts = (id: number) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  const response = await axios
    .create({ baseURL: "https://jsonplaceholder.typicode.com/" })
    .get(`posts?userId=${id}`);

  dispatch({ type: FETCH_USER_POSTS, payload: response.data });
};
