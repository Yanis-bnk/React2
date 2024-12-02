

import { Component } from 'react';
import './App.css';
import Home from './Home';
class App extends Component{
  state={
    profile:[
      {name:"yanis" , lastname:"beniken"},
      {name:"rayan" , lastname:"hm"},
      {name:"brahim" , lastname:"imanis"},
      {name:"yan" , lastname:"ben"},
      {name:"ra" , lastname:"h"},
      {name:"br" , lastname:"imas"},
      
    ]
  }
  render (){
    const data=this.state.profile.map((item)=>{
      return (
        <ul>
          <li>{item.name}</li>
          <li>{item.lastname}</li>
        </ul>
      )

    })
    return (
      <div className="App">
        {data}

      </div>
    )
  }
}


export default App;
