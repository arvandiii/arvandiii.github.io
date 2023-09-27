import Header from './components/Header';
import { useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const curroute = (useLocation().pathname);
  return (
    <div className="App">
      <Header curroute={curroute} />
      <p> salam </p>
      fdghjkl
      <p> salam </p>
      <p> salam </p>
      sfdghjkl
    </div>
  );
}

export default App;
