import { extendObservable } from "mobx";

class DataStorage {
  constructor() {
    extendObservable(this, {
      data: [],
    });
  }
}

export default new DataStorage();
