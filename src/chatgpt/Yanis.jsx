import React, { useState } from 'react';

function Yanis() {
  const [name, setName] = useState('Yanis');
  const [age, setAge] = useState(100);
 

  return (
    <div>
      <h1>Salut, {name} !</h1>
      <h2>et jai  {age} !</h2>
      <button onClick={() => setName('Ali')}>Changer le nom</button>
      <button onClick={() => setAge(prevState=>{
        return prevState=0
      })}>reset</button>

      <button onClick={() => setAge(prevState =>{
        return prevState+100
      })}>Changer le age +100</button>
      
    </div>
  );
}

export default Yanis;
