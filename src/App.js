import logo from './logo.svg';
import './App.css';
import algosdk from 'algosdk'



function App() {

  function test() {
    // note: upgrading to react-scripts > 5 in package.json causes error to change to "Buffer is not defined"
    try {
      console.log(algosdk.encodeUint64(123456));
    } catch (e) {
      console.log(e);
      alert(e);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={test} >Test Algosdk encodeUint64 error</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
