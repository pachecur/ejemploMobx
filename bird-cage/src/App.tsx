import React, { Component } from "react";
import { Provider } from "mobx-react";
import store from "./stores/BirdStore";
import HelloWorld from "./Modulo/Test";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HelloWorld />
      </Provider>
    );
  }
}

export default App;
