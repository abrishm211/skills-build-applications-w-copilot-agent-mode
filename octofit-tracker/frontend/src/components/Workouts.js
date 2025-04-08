import React from 'react';

function Workouts() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Workouts</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Workout Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            <tr>
              <td>Running</td>
              <td>Morning run in the park</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workouts;
