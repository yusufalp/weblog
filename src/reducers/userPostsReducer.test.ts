import userPostsReducer from "./userPostsReducer";

describe("User Post Reducer", () => {
  it("returns default state", () => {
    const newState = userPostsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("returns a new state if received a valid type", () => {
    const posts = [
      { title: "title 1", body: "body 1" },
      { title: "title 2", body: "body 2" },
      { title: "title 3", body: "body 3" },
    ];
    const newState = userPostsReducer(undefined, {
      type: "FETCH_USER_POSTS",
      payload: posts,
    });
    expect(newState).toEqual(posts);
  });
});
