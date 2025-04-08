import React from 'react';

function Activities() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Activities</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Activity</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr>
              <td>Running</td>
              <td>30 mins</td>
              <td>2025-04-08</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;
