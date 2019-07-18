import React from "react";
import ReactDOM from "react-dom";

let dummyData = [
  { taskText: "cry", completed: false },
  { taskText: "eat", completed: false },
  { taskText: "sleep", completed: false }
];
class Todo extends React.Component {
  toggleComplete(e) {
    console.log("hello");
  }
  render() {
    return (
      <li>
        <input
          type="checkbox"
          name="toggleComplete"
          id=""
          onClick={event => this.toggleComplete(event)}
        />
        {!this.props.task.completed ? (
          this.props.task.taskText
        ) : (
          <strike>{this.props.task.taskText}</strike>
        )}
      </li>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todolist">
        {dummyData.map(item => {
          return <Todo task={item} />;
        })}
      </ul>
    );
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    this.setState({
      todos: dummyData
    });
  }
  render() {
    return <TodoList todos={this.state.todos} />;
  }
}
ReactDOM.render(<TodoApp />, document.getElementById("root"));
