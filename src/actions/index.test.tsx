import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./index";
import mockAxios from "jest-mock-axios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("fetches users", () => {
    mockAxios.get("/users");

    const store = mockStore({ users: [] });

    return store.dispatch(actions.fetchUsers()).then(() => {
      expect(store.getActions()[0].payload).toHaveLength(10);
    });
  });

  it("fetches single user posts", () => {
    mockAxios.get("/users");

    const store = mockStore({ posts: [] });

    return store.dispatch(actions.fetchUserPosts(1)).then(() => {
      expect(store.getActions()[0].payload).toHaveLength(10);
    });
  });
});
