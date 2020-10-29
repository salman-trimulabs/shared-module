import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Button, message } from "antd";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          type="primary"
          onClick={() => message.info("This is project 2")}
        >
          Project 2
        </Button>
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
