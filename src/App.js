import React from 'react';
import './App.css';
import Header from './components/Header';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Link className="links display-links" to="/blog">All Blogs</Link>
    </div>
  );
}

export default App;
