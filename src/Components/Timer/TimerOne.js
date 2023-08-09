import React from "react";

export default class Timer extends React.Component {
    constructor() {
        super();
        this.state= {
            counter:0
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

    render() {
        console.log("Timer render");
        return (<h1>Timer</h1>);
    }

    componentDidMount() {
        console.log("Timer componentDidMount");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Timer getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("Timer componentDidUpdate");
    }
}
