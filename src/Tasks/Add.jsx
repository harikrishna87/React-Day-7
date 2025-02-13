import { Component } from "react";

class Add extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            items: []
        }
    }

    HandleAdd = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleadd = () => {
        this.setState({
            items: [...this.state.items, this.state.name]
        })
    }

    render() {
        return (
            <>
                <h1>Add Items...</h1>
                <input type="text" placeholder="Type Here..." onChange={this.HandleAdd} />
                <button onClick={this.handleadd} >Add</button>
                <div>
                    <h2>Added Items:</h2>
                    {this.state.items.map((item, ind) => {
                        return (
                            <>
                                <li key={ind}>{item}</li>
                            </>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default Add