import { Component } from "react";
import TimerOne from './Components/Timer/TimerOne'
class App extends Component  {
  constructor(){
    super();
    this.state={
      mount:false
    }
  }

  handleMount=()=>{
    this.setState((prevState)=>({mount:!prevState.mount}));

  }
  
  render(){
    return (
    <>
    <button onClick={this.handleMount}>{this.state.mount ? "Unmount":"Mount"}</button>
    {this.state.mount ? <TimerOne/>:null}
    </>
      );
  }

}

export default App;
