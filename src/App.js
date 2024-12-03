

import { Component } from 'react';
import './App.css';

class App extends Component{
  state={
    className:'green'
  }
  handelColor=(e)=>{
    e.preventDefault()
    this.setState({
      className:'red'
    })
  }
  handelColor2=(e)=>{
    e.preventDefault()
    this.setState({
      className:'green'
    })
  }
 
  render (){
    
    return (
      <div className="App">
             <h1 className={this.state.className}> Yanis beniken de cevital</h1>
             <button onClick={this.handelColor}> red</button>
             <button onClick={this.handelColor2}> vert</button>
      </div>
    )
  }
}


export default App;
