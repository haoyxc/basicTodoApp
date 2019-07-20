import React from "react";

class Todo extends React.Component {
  //   toggleComplete(e) {
  //     // console.log("hello");
  //   }
  render() {
    return (
      <li className="todoItem">
        {!this.props.task.completed ? (
          <div>
            <input
              type="checkbox"
              name="toggleComplete"
              id=""
              onClick={event => this.props.toggleCompl(this.props.task._id)}
            />{" "}
            {this.props.task.task}
          </div>
        ) : (
          <div>
            <input
              type="checkbox"
              name="toggleComplete"
              id=""
              onClick={event => this.props.toggleCompl(this.props.task._id)}
              checked
            />{" "}
            <strike>{this.props.task.task}</strike>
          </div>
        )}
        <button
          className="removeBtn"
          // onClick={(this.props.task.key) => {this.props.xClick(this.props.task.key)}}
          onClick={e => this.props.xClick(this.props.task._id)}
        >
          x
        </button>
      </li>
    );
  }
}

export default Todo;
