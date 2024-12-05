

import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';

import Home from './component/Home';



class App extends Component{
 
  render (){
    
    return (
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Router>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
 </Router>

      
      
      </BrowserRouter>
    )
  }
}


export default App;
