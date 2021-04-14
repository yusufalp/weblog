import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";

class PostUsers extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    console.log(this.props.users);
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
            <tr>
              <td>Test</td>
              <td>test@example.com</td>
              <td>Test City</td>
              <td>Test Company</td>
            </tr>
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
