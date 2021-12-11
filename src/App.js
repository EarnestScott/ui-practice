import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="/facebook">Facebook</a>
        <a className="App-link" href="/coinbase">Coinbase</a>
      </header>

      <Link to="/facebook">Facebook</Link>
      <Link to="/coinbase">Coinbase</Link>
    </div>
  );
}

export default App;
