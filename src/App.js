

import { Component } from 'react';
import './App.css';



import Fruit from './Fruits/Fruit';
import Counter from './counter/Counter';







const fruitsArray=[
  'banane','orange','lemon',
  'banane','orange','lemon',
]



class App extends Component{
 
  render (){
    
    return (<div>
      <Counter/>
      
      
       
    </div>
         
    )
  }
}


export default App;
