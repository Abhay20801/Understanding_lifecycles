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

      
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Timer getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState,snapShot) {
        console.log("Timer componentDidUpdate");
        console.log("_____________________________________");
       
        if(prevProps.timerOn !== this.props.timerOn){
            if(this.props.timerOn){
                this.timer = setInterval(()=>{
                    this.setState((prevState)=>({time:prevState.time+1}))
                },1000)
            }else{
                clearInterval(this.timer);
            }
        }
       
    }

    componentWillUnmount(){
        console.log("TimerOne Componenet will unmount");
        clearInterval(this.timer);
    }
}
