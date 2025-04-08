import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/workouts${process.env.REACT_APP_CODESPACE_SUFFIX}`)
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Workouts</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Workout Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout.id}>
              <td>{workout.name}</td>
              <td>{workout.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
