import React from "react";

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

export default Todo;
