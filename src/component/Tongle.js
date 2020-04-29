import React, { Component }from 'react'
class Tongle extends Component{
    constructor(props){
        super(props)
        this.state = {
            isTongleOn:true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(state=>({
            isTongleOn:!state.isTongleOn
        }));
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                Click Event {this.state.isTongleOn?'ON':'OFF'}
            </button>
        )
    }
}

export default Tongle;