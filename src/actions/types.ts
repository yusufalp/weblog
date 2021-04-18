export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USER_POSTS = "FETCH_USER_POSTS";

interface FetchUsers {
  type: typeof FETCH_USERS;
  payload: {
    id: number;
    name: string;
    email: string;
    address: { city: string };
    company: { name: string };
  }[];
}

interface FetchUserPosts {
  type: typeof FETCH_USER_POSTS;
  payload: { title: string; body: string; id: number }[];
}

export type FetchUsersType = FetchUsers;
export type FetchUserPostsType = FetchUserPosts;
