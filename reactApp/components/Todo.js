import React from "react";

class Todo extends React.Component {
  //   toggleComplete(e) {
  //     // console.log("hello");
  //   }
  render() {
    return (
      <li className="todoItem">
        <input
          type="checkbox"
          name="toggleComplete"
          id=""
          onClick={event => this.props.toggleCompl(this.props.a)}
        />
        {!this.props.task.completed ? (
          this.props.task.taskText
        ) : (
          <strike>{this.props.task.taskText}</strike>
        )}
        <button
          style={btnStyle}
          // onClick={(this.props.task.key) => {this.props.xClick(this.props.task.key)}}
          onClick={e => this.props.xClick(this.props.a)}
        >
          x
        </button>
      </li>
    );
  }
}

const btnStyle = {
  float: "right",
  cursor: "pointer",
  borderRadius: "50%",
  padding: "5px 9px",
  border: "none",
  background: "#ff0000",
  color: "#fff"
};
export default Todo;
