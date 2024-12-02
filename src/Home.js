import React, { Component } from 'react';


class Home extends Component {
    render(){
        const name=this.props.name
        const age=this.props.age
        return (
        
          
     <div className="App">
        <h1>Yanis beniken veut passer un message </h1>
        <h2> {name}</h2>
        <h3> {age}</h3>
         
       
         
         
    </div>

        );

    }
}
export default Home;