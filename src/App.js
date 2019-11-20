import React, { Component } from "react";
import ReactDOM from "react-dom";
import Per from "./Person";

class App extends Component {
  state = {
    person: [
      { name: "naru", age: "22" },
      { name: "meenu", age: "26" },
      { name: "karthik", age: "28" }
    ],
    other: "Hello I am Back",
    toggle:0,

  };

  componentDidMount()
  {
    setTimeout(()=>{this.setState({
      person: [
        { name: "naru", age: "22" },
        { name: "meenu", age: "26" },
        { name: "karthik", age: "28" }
      ]
    })},2000)
  }
  
  //  toggleState=()=>
  //  {
  //    const toggle=this.state.toggle;
  //    if(toggle===0)
  //    {
  //     this.switchHandler();
  //     this.state.toggle=1;
  //    }
  //    else{
  //    this.setState({ person: [
  //       { name: "naru", age: "22" },
  //       { name: "meenu", age: "26" },
  //       { name: "karthik", age: "28" }
  //     ]})
  //     this.state.toggle=0;
  //    }

  //  }
  changeValue=(event)=>
  {
    this.setState({
      person: [
        { name: event.target.value, age: "25" },
        { name: "meenu", age: "26" },
        { name: "karthik", age: "28" }
      ],
      toggle:1,
    });
  }
  switchHandler = () => {
    this.setState({
      person: [
        { name: "Iyer", age: "25" },
        { name: "meenu", age: "26" },
        { name: "karthik", age: "28" }
      ],
      toggle:1,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello React User</h1>
        <p>This is amazing</p>
        <button onClick={this.switchHandler}>Change Name</button>
        <Per
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          click={this.switchHandler}
          changed={this.changeValue}
        />
        <Per name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }
}
export default App;
