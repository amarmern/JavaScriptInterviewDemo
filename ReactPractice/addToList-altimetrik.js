import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState({ inputVal: '' });
  let [listItem, setListItem] = useState([]);
  const handleInput = () => {
    setListItem([...listItem, data]);
  };
  useEffect(() => {
    console.log(listItem);
  }, [listItem]);
  return (
    <div className="App">
      Hello
      <div>
        <input
          type="text"
          name="data.inputVal"
          value={data.inputVal}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleInput}>Add</button>
      </div>
      <ul>
        {listItem.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
