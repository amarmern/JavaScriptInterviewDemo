import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({ name: '', password: '' });
  const loginHandler = (e) => {
    e.preventDefault();
    console.log('state', state);
  };
  return (
    <div className="App">
      <form onSubmit={loginHandler}>
        <input
          name={state.name}
          value={state.name}
          type="text"
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <input
          type="text"
          name={state.name}
          value={state.value}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <button>save</button>
      </form>
    </div>
  );
}

export default App;
