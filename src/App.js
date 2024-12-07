

import { Component } from 'react';
import './App.css';


import Helloword from './helloword/Helloword';
import Formj from './Form/formj';










class App extends Component{
 
  render (){
    
    return (<div>
      <Helloword lastname="mourad"/> 
      <Formj inputName="nameyansi" inputLabel="wina"/>
      je suis le fils 
       
    </div>
         
    )
  }
}


export default App;
