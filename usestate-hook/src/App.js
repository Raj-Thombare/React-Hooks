import {useState} from 'react';
import "./App.css";

function App() {
  const [color, setColor] = useState('#2016A6');

  const changeColor = () => {
    setColor(randomColorGenerator)
  }

  const randomColorGenerator = () => {
    return `#${Math.random().toString(16).substring(2,8)}`
  }

  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      <div className="container">
        <div className="box" style={{backgroundColor:color}}>
          <div className='colorcode'>
          {color}
          </div>
        </div>
        <button onClick={changeColor} style={{backgroundColor:color}}>Change Color</button>
      </div>
    </div>
  );
}

export default App;
