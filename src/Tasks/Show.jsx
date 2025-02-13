import { Component } from "react";

class Show extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }

    handleevent = () => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <>
                <h1>Typed Value: {this.state.name}</h1> <br />
                <input type="text" placeholder="Type Something..." onChange={this.handleevent} />
            </>
        )
    }
}

export default Show;