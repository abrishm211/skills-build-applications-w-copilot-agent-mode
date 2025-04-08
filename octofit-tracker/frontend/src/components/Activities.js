import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/activities${process.env.REACT_APP_CODESPACE_SUFFIX}`)
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Activities</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.name}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
