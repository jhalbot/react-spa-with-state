import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { DH_NOT_SUITABLE_GENERATOR } from "constants";


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtractOne = this.handleSubtractOne.bind(this);
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  handleSubtractOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  render(){
    return (
      <div>
        <h3>Count (React State Management): {this.state.count}</h3>
        <button onClick={this.handleAddOne}>Add One</button>
        <button onClick={this.handleSubtractOne}>Subtract One</button>
        <button onClick={this.handleReset}>Reset Counter</button>
      </div>
    );
  }
}

const RouterStart = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stateCount">State Count</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/stateCount" component={StateCount} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>A Single Page React Application Using BrowserRouter</p>
  </div>
);

const StateCount = () => (
  <div>
    <Counter />
  </div>
);


export default RouterStart;