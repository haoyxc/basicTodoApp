import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <ul className="todolist">
        {this.props.todos.map(item => {
          return <Todo task={item} />;
        })}
      </ul>
    );
  }
}
