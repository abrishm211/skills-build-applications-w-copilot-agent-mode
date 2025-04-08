import React from 'react';

function Leaderboard() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Leaderboard</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr>
              <td>JohnDoe</td>
              <td>150</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
