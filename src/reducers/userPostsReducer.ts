import { FETCH_USER_POSTS, DispatchTypes } from "../actions/types";

interface UserPost {
  title: string;
  body: string;
  id: number;
}

type userPostsReducerDefaultState = UserPost[];

const userPostsReducer = (
  state: userPostsReducerDefaultState = [],
  action: DispatchTypes
) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default userPostsReducer;
