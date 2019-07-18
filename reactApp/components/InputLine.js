import React, { Component } from "react";

export class InputLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ""
    };
  }
  handleTyping(event) {
    this.setState({
      typedText: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state.typedText);
    // console.log(this.state.typedText);
    this.setState({
      typedText: ""
    });
  }

  render() {
    return (
      <form action="" style={{ display: "flex" }}>
        <input
          style={{ flex: "10", padding: "10px" }}
          type="text"
          name="title"
          id=""
          placeholder="Add Todo..."
          value={this.state.typedText}
          onChange={e => this.handleTyping(e)}
        />
        <input
          onClick={event => this.handleSubmit(event)}
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default InputLine;
