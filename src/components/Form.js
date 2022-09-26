import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.DataStorage = this.props.DataStorage;
  }

  setData() {
    let value = this.state.value;

    this.DataStorage.data.push(value);

    this.setState({
      value: "",
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button onClick={() => this.setData()}>Add data to DataStorage</button>
      </div>
    );
  }
}

export default Form;
