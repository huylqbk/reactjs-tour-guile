import React, { Component } from 'react';

class ClockState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    tick() {
        //schedule updates to the component
        this.setState({ date: new Date()});
    }
    componentWillMount() {
        alert("Call when start render component")
    }

    componentDidMount() {
        //after render finished
        this.timerID = setInterval(
            ()=>this.tick(), 1000
        )
    }

    componentWillUnmount(){
        //when component not show
        clearInterval(this.timerID)
    }

    render() {
        return (
            <h4>Clock State {this.state.date.toLocaleTimeString()} </h4>
        );
    }
}

export default ClockState;