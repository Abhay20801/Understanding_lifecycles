import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component{
    constructor(){
        super();

        this.state={
            name:"Component A",
            data:[]
        }
        console.log("Component A constructor");

        // Can't call setState on a component that is not yet mounted
        // this.setState({
        //     name:"CA"
        // })
    }

    static getDerivedStateFromProps(){
        console.log("Component A get Derived state by props");
        return null;
    }
// https://jsonplaceholder.typicode.com/users
    componentDidMount(){
        console.log("ComponentA Componentn Did Mount");
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({data}))  // data:data
    }

    render(){
        console.log("Component A render");
       
        const { name } = this.state;
        return(
            <>
            <h1>{name}</h1>
            <ul>
                {this.state.data.map((d)=>{
                    return(
                        <li>{d.username}</li>
                    )
                })}
            </ul>
            </>
            
        )
    }

}

export default ComponentA;