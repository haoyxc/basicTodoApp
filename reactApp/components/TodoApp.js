import React from "react";
import TodoList from "./TodoList";
import InputLine from "./InputLine";

let dummyData = [
  { taskText: "cry", completed: false },
  { taskText: "eat", completed: false },
  { taskText: "sleep", completed: false }
];

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  addTodo(task) {
    let newTodo = {
      taskText: task,
      completed: false
    };
    console.log(newTodo);
    dummyData = [...dummyData, newTodo];
    this.setState({
      todos: dummyData
    });
  }
  //   removeTodo = () => {};
  componentDidMount() {
    this.setState({
      todos: dummyData
    });
  }
  render() {
    return (
      <div className="container">
        <InputLine submit={task => this.addTodo(task)} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
