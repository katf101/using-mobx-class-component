import "./App.css";
import { observer } from "mobx-react";
import React, { Component } from "react";
import DataStorage from "./stores/DataStorage";
import Form from "./components/Form";

class App extends Component {
  mapData() {
    let data = DataStorage.data;

    return data.map((item, key) => {
      return <div>{item}</div>;
    });
  }

  render() {
    return (
      <div>
        {this.mapData()}
        <Form DataStorage={DataStorage} />
      </div>
    );
  }
}

export default observer(App);
