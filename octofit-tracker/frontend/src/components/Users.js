import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/users${process.env.REACT_APP_CODESPACE_SUFFIX}`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Users</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
