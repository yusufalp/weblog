import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import { Link } from "react-router-dom";

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

const PostUsers: React.FC<Props> = (props) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    props.fetchUsers();
  });

  return (
    <div>
      <h2>List of Users</h2>
      <label htmlFor="search">Search Name:</label>
      <input
        type="text"
        name="search"
        id="search"
        onChange={(e) => setSearchValue(e.target.value)}
      />{" "}
      <span className="attention">(Case Sensitive)</span>
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
          {props.users
            .filter((filteredUsers) => filteredUsers.name.includes(searchValue))
            .map((user) => {
              return (
                <tr key={user.id}>
                  <td>
                    <Link to={`users/${user.id}`}>{user.name}</Link>
                  </td>
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
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(PostUsers);
