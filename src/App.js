import logo from './logo.svg';
import './App.css';
import Login from './components/body/Login/Login';
import Register from './components/Register/Register'
import Body from './components/body/body'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Body />
      </Router>

    </div>
  );
}

export default App;
