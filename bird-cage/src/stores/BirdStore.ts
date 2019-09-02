import { observable, action, computed } from "mobx";

export class BirdStore {
  @observable birds: any[] = [];

  @action addBird = (bird: any) => {
    this.birds.push(bird);
  };

  @computed get birdCount() {
    return this.birds.length;
  }
}

const store = new BirdStore();

export default store;
