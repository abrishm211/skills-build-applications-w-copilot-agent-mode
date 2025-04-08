import React from 'react';

function Users() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Users</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr>
              <td>JaneDoe</td>
              <td>jane.doe@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
