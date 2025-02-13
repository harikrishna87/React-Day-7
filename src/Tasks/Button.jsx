import { Component } from "react";

class Button extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count +10
        })
    }

    handleDecrement = () => {
        this.setState({
            count: this.state.count -1
        })
    }

    handlereset = () => {
        this.setState({
            count: 0
        })
    }
    render(){
        return(
            <>
                <button>Count : {this.state.count} </button> <br />
                <button disabled = {this.state.count >= 100} onClick={this.handleIncrement}>+</button>
                <button disabled={this.state.count == 0} onClick={this.handlereset}>reset</button>
                <button disabled={this.state.count <=0} onClick={this.handleDecrement}>-</button>
            </>
        )
    }
}
export default Button;