import { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
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
        return (
            <>
                <p>Il y a {this.state.counter} secondes</p>
            </>
        );
    }
}
