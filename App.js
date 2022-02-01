import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count2: 0
    };
  }
  //incrementCount (a){   use of the argument
  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrementCount() {
    this.setState({
      count: this.state.count - 1
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.incrementCount();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.decrementCount();
          }}
        >
          -
        </button>
      </>
    );
  }
}
export default App;
