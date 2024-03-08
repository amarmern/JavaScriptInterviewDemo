import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('https://reqres.in/api/users')
  //     .then((data) => setUser(data.data.data));
  // }, []);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data.data);
      });
  }, []);
  return (
    <div className="App">
      {user &&
        user.map((p) => (
          <li key={p.id}>
            {' '}
            <div className="card">
              <img src={p.avatar} alt="Avatar" />
              <div className="container">
                <b>
                  <label>{p.first_name}</label>
                  <label>{p.last_name}</label>
                </b>
              </div>
              {p.em}
            </div>
          </li>
        ))}
    </div>
  );
}

export default App;
