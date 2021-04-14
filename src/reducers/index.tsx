import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import userPostsReducer from "./userReducer";

export default combineReducers({
  users: usersReducer,
  userPosts: userPostsReducer,
});
