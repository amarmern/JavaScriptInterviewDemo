import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({ name: '', city: '' });
  const handleChange = (e) => {
    //const initialState = { ...state };
    // const { name, value } = e.target;
    // initialState[name] = value;
    // setState(initialState);
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <div className="App-content">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Please Enter the Name"
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="city"
          placeholder="Please Enter the City"
          value={state.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;

/// in App.css we can update from below code
// .App-content {
//     min-height: 50vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
