

import { Component } from 'react';
import './App.css';



import Fruit from './Fruits/Fruit';







const fruitsArray=[
  'banane','orange','lemon',
  'banane','orange','lemon',
]



class App extends Component{
 
  render (){
    
    return (<div>
      <Fruit fruits={fruitsArray}/>
      
      
       
    </div>
         
    )
  }
}


export default App;
