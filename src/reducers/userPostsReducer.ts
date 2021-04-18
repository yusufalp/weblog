import { FETCH_USER_POSTS, FetchUserPostsType } from "../actions/types";

interface UserPost {
  title: string;
  body: string;
  id: number;
}

type userPostsReducerDefaultState = UserPost[];

const userPostsReducer = (
  state: userPostsReducerDefaultState = [],
  action: FetchUserPostsType
) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default userPostsReducer;
