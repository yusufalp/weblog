import { FETCH_USERS, DispatchTypes } from "../actions/types";

interface Users {
  id: number;
  name: string;
}

type usersReducerDefaultState = Users[];

const usersReducer = (
  state: usersReducerDefaultState = [],
  action: DispatchTypes
) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
