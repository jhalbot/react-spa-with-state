import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { DH_NOT_SUITABLE_GENERATOR } from "constants";


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleAddChar = this.handleAddChar.bind(this);
    this.state = {
      count: 0,
      userText: 'user124'
    };
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  handleAddChar(userOption) {
    userOption.preventDefault();
    const option = userOption.target.elements.option.value;
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
        userText: option
      };
    })
    console.log(this.state.userText);
    this.render();
  }
  //function that updates a canvas with the svg?
  render(){
    return (
      <div>
        <h3>Identicons Rendered (React State Management): {this.state.count}</h3>
        <button onClick={this.handleReset}>Reset Counter</button>
          <form onSubmit={this.handleAddChar}>
            Enter Your Text Here: 
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        <p>{this.state.userText}</p>
        <canvas width="80" height="80" data-jdenticon-value='user123'></canvas>
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
          <Link to="/identiconGen">Identicon Generator</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/identiconGen" component={IdenticonGen} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>A Single Page React Application Using BrowserRouter</p>
  </div>
);

const IdenticonGen = () => (
  <div>
    <Counter />
  </div>
);

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

export default RouterStart;