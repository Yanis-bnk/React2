

import { Component } from 'react';
import './App.css';


import Helloword from './helloword/Helloword';
import Formj from './Form/formj';
import Github from './Form/Github';










class App extends Component{
 
  render (){
    
    return (<div>
      <Helloword lastname="mourad"/> 
      <Github/>
      <Formj inputName="nameyansi" inputLabel="wina"/>
      
      
       
    </div>
         
    )
  }
}


export default App;
