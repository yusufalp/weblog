import React, { useState, useEffect, ChangeEvent } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";
import { Link } from "react-router-dom";

interface UserListProps {
  fetchUsers: () => void;
  users: {
    id: number;
    name: string;
    email: string;
    address: { city: string };
    company: { name: string };
  }[];
}

const UserList: React.FC<UserListProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    props.fetchUsers();
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <h2>List of Users</h2>
      <label htmlFor="search">Search Name:</label>
      <input
        type="text"
        name="search"
        id="search"
        onChange={handleInputChange}
      />
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
            .filter((filteredUsers) =>
              filteredUsers.name
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            )
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

export default connect(mapStateToProps, { fetchUsers })(UserList);
