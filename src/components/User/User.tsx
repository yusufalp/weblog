import React from "react";

const User: React.FC = () => {
  return (
    <div>
      <h2>User: </h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title 1</td>
            <td>Body 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
