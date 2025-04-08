import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://jubilant-goldfish-g4rjjprw67r9359p-8000.app.github.dev/api/teams')
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
