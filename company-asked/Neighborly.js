import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    //https://jsonplaceholder.typicode.com/users
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = user.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredUsers.map((u) => (
          <>
            <li>{u.name}</li>
            <li>{u.username} </li>
            <li>{u.email} </li>
          </>
        ))}
      </ul>
    </div>
  );
}
