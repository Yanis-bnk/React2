import { Component, useEffect, useState } from "react";
/*import { Component, useState } from "react";
export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        console.log('hi from constructor')
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => {
                return { counter: prevState.counter + 1 };
            });
        }, 1000); // Utiliser 1000 ms pour un intervalle d'une seconde
    }

    componentWillUnmount() {
        clearInterval(this.interval); // Nettoyage de l'intervalle
    }

    render() {
        console.log('hi from constructor')
    
        return (
            <>
                <p>Il y a {this.state.counter} secondes</p>
            </>
        );
    }
}
*/
export default function Counter({init,step}){
    const [counter,setCounter]=useState(init)
    useEffect(()=>{
        console.log('attan techangii aaa')
    },[counter])

    
    return <>
    <button onClick={()=>{ setCounter(prevState=>{ return prevState+step} )}} > incremneter</button>
    <button onClick={()=>{ setCounter(prevState=>{ return prevState-step} )}} > decremneter</button>
    
    <p>Il y a {counter} secondes</p>
    
    </>
}
