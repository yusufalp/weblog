import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserPosts } from "../../actions";

interface Props {
  fetchUserPosts: Function;
  userPosts: { title: string; body: string; id: number }[];
  match: { params: { id: number } };
}

const User: React.FC<Props> = (props) => {
  useEffect(() => {
    props.fetchUserPosts(props.match.params.id);
  });

  return (
    <div>
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
  return { userPosts: state.userPosts };
};

export default connect(mapStateToProps, { fetchUserPosts: fetchUserPosts })(
  User
);
