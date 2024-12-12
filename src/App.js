

import { Component } from 'react';
import './App.css';



import Fruit from './Fruits/Fruit';
import Counter from './counter/Counter';
import Form from './Form/form';
import FruitList from './Fruits/FruitList';







const fruitsArray=[
  'banane','orange','lemon',
  'banane','orange','lemon',
]



class App extends Component{
 
  render (){
    
    return (<div>
      <Counter init={0} step={2} />
      
      
      
       
    </div>
         
    )
  }
}


export default App;
