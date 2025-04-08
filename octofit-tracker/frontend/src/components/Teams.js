import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/teams${process.env.REACT_APP_CODESPACE_SUFFIX}`)
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Teams</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Team Name</th>
            <th scope="col">Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.members.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
