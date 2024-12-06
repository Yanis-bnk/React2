import { useState } from "react"

export default function Form(){

const [name,setName]=useState()
const [age,setAge]=useState()

 const recupererName=()=>{
    const name=document.getElementById('name')
     setName(name)
 }

 const recupererAge=()=>{
    const age=document.getElementById('age')
    setAge(age)
 }
 const consoleTarget=(e)=>{
e.preventDefault()
console.log({
    name:name,
    age:age
})
 }





    return <div>
        <input type="text" placeholder="nom" id="name" onChange={recupererName} />
        <input type="number" placeholder="age" id="age" onChange={recupererAge}/>
        <input type="submit" valeur="Submit" onClick={consoleTarget}/>
    </div>
}