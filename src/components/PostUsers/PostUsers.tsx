import React from "react";

const PostUsers = () => {
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
};

export default PostUsers;
