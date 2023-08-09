import React from "react";

export default class Timer extends React.Component {
    constructor() {
        super();
        this.state= {
            time:0
        }

        this.timer= null;
        console.log("Timer Constructor");
    }

    static getDerivedStateFromProps() {
        console.log("Timer getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }



    render() {
        console.log("Timer render");
       
        const {time} = this.state;
        
        return (
        <>
        <h1>Time Spent:  {new Date(time * 1000).toISOString().slice(11,19)}</h1>
       
        </>
        );
    }

    componentDidMount() {
        console.log("Timer componentDidMount");
        console.log("_____________________________________");

        this.timer = setInterval(()=>{
            this.setState((prevState)=>({time:prevState.time+1}))
        },1000)
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
