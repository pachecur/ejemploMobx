import { observer, inject } from "mobx-react";
import React, { Component } from "react";
import { BirdStore } from "../stores/BirdStore";
@inject("store")
@observer
class Test extends Component<{ store?: BirdStore }> {
  bird: any;
  handleSubmit = (e: any) => {
    e.preventDefault();
    const { store } = this.props;
    const bird = this.bird.value;
    console.log(bird);
    store && store.addBird(bird);
  };
  render() {
    const { store } = this.props;
    return (
      <div>
        <h2>you have {store && store.birdCount} birds</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter bird"
            ref={input => (this.bird = input)}
          ></input>
          <button>Add Bird</button>
          <ul>
            {store &&
              store.birds.map((bird: string, index: number) => (
                <li key={index}>{bird}</li>
              ))}
          </ul>
        </form>
      </div>
    );
  }
}

export default Test;
