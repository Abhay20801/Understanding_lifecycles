import React from "react";

export default class Timer extends React.Component {
    constructor() {
        super();
        this.state= {
            count:0
        }
        console.log("Timer Constructor");
    }

    static getDerivedStateFromProps() {
        console.log("Timer getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }


    handleIncrease=()=>{
        this.setState((prevState)=>{
            return {count: prevState.count+1}
        })
        
    }

    render() {
        console.log("Timer render");
       
        const {count} = this.state;
        
        return (
        <>
        <h1>Timer</h1>
        
        <h2>{count}</h2>
        <button onClick={this.handleIncrease}>Increase</button>
        </>
        );
    }

    componentDidMount() {
        console.log("Timer componentDidMount");
        console.log("_____________________________________");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Timer getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("Timer componentDidUpdate");
        console.log("_____________________________________");
    }
}
