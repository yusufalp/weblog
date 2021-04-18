import userPostsReducer from "./userPostsReducer";
import { FETCH_USER_POSTS } from "../actions/types";

describe("User Post Reducer", () => {
  it("returns default state", () => {
    const newState = userPostsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("returns a new state if received a valid type", () => {
    const posts = [
      { title: "title 1", body: "body 1", id: 1 },
      { title: "title 2", body: "body 2", id: 2 },
      { title: "title 3", body: "body 3", id: 3 },
    ];
    const newState = userPostsReducer(undefined, {
      type: FETCH_USER_POSTS,
      payload: posts,
    });
    expect(newState).toEqual(posts);
  });
});
