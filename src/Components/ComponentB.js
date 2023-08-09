import React from "react";

class ComponentB extends React.Component{
    constructor(){
        super();

        this.state={
            name:"Component B"
        }
        console.log("Component B constructor");

        // Can't call setState on a component that is not yet mounted
        // this.setState({
        //     name:"CA"
        // })
    }

    static getDerivedStateFromProps(){
        console.log("Component B get Derived state by props");
        return null;
    }

    componentDidMount(){
        console.log("ComponentB Componentn Did Mount");
    }

    render(){
        console.log("Component B render");
      
        const { name } =this.state;
        return(
            <h2>{name}</h2>
        )
    }

}

export default ComponentB;