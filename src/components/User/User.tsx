import React, { useEffect } from "react";
import { RouteProps } from "react-router";
import { connect } from "react-redux";
import { fetchUserPosts, fetchUsers } from "../../actions";

interface UserProps {
  fetchUserPosts: (id: number) => void;
  userPosts: { title: string; body: string; id: number }[];
}

const User: React.FC<UserProps & RouteProps> = (props) => {
  useEffect(() => {
    props.fetchUserPosts(props.match.params.id);
  }, []);

  let postsOwner = props.users.find(
    (user) => user.id === Number(props.match.params.id)
  );

  return (
    <div>
      {postsOwner && <h2>{postsOwner.name}'s posts</h2>}
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {props.userPosts.map((userPost) => {
            return (
              <tr key={userPost.id}>
                <td>{userPost.title}</td>
                <td>{userPost.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { userPosts: state.userPosts, users: state.users };
};

export default connect(mapStateToProps, {
  fetchUserPosts,
  fetchUsers,
})(User);
