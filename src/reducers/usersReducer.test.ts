import usersReducer from "./usersReducer";

describe("User list Reducer", () => {
  it("returns default state", () => {
    const newState = usersReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("returns a new state if received a valid action type", () => {
    const users = [
      {
        id: "id 1",
        name: "name 1",
        email: "test1@example.com",
        address: { city: "city 1" },
        company: { name: "company 1" },
      },
      {
        id: "id 2",
        name: "name 2",
        email: "test2@example.com",
        address: { city: "city 2" },
        company: { name: "company 2" },
      },
      {
        id: "id 3",
        name: "name 3",
        email: "test3@example.com",
        address: { city: "city 3" },
        company: { name: "company 3" },
      },
    ];
    const newState = usersReducer(undefined, {
      type: "FETCH_USERS",
      payload: users,
    });
    expect(newState).toEqual(users);
  });
});
