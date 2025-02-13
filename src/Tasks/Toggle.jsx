import { Component } from "react";

class Toggle extends Component{
    constructor(){
        super() 
        this.state = {
            name : "Hari",
            isToggleOn: true
        }
    }

    handleToggle = () => {
        this.setState({isToggleOn : !this.state.isToggleOn})
    }

    render(){
        return(
                <>
                    <h1>Toggle Task</h1>
                    <div className="name">
                        <h1>{this.state.isToggleOn && this.state.name}</h1>
                    </div>
                    <div className="click">
                        <button className="btn" onClick={this.handleToggle}>{this.state.isToggleOn ? "Hide" : "Show"}</button>
                    </div>
                </>
        )
    }
}
export default Toggle;