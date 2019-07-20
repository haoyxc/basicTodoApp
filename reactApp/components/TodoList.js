import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <ul className="todolist">
        {this.props.todos.map(item => {
          //   console.log(item);
          return (
            <Todo
              key={item._id}
              //   a={item.id}
              task={item}
              xClick={this.props.todoXClick}
              toggleCompl={this.props.toggleCompl}
            />
          );
        })}
      </ul>
    );
  }
}
