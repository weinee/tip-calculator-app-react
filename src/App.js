import logo from "./Images/logo.svg";
import "./App.css";
import Left from "./Components/Left";
import Right from "./Components/Right";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="container">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
