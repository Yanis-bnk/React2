

import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      dz:undefined,
      maroco:undefined
    }
  }
  handleChange1=(e)=> {
    if(e.target.checked==true && e.target.name=="dz"){
      this.setState({
        
        dz:'dz'
      })
    }

    
    }
  handleChange=(e)=> {
    if(e.target.checked==true && e.target.name=="maroco"){
      this.setState({
        
        maroco:'maroco'
      })
    }

    
    }

  render (){
    
    return (
      <div className="App">
           
             
             <br/>
             dz: <input type='checkbox' name='dz' value='dz' onChange={this.handleChange1}/>
             maroco: <input type='checkbox' name='maroco' value='maroco' onChange={this.handleChange}/>
             <p>{this.state.dz}</p>
             <p>{this.state.maroco}</p>
      </div>
    )
  }
}


export default App;
