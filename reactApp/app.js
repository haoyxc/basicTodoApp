import React from "react";
import ReactDOM from "react-dom";

let dummyData = ["cry", "eat", "sleep"];
class Todo extends React.Component {
  render() {
    return <li>{this.props.task}</li>;
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {dummyData.map(item => {
          return <Todo task={item} />;
        })}
      </ul>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById("root"));
