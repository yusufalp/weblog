import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";

interface Props {
  fetchUsers: Function;
  users: {
    id: number;
    name: string;
    email: string;
    address: { city: string };
    company: { name: string };
  }[];
}

class PostUsers extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <h2>List of Users</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Company</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>{user.company.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers: fetchUsers })(PostUsers);
