// store/counterStore.js
import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this); // Сделает свойства наблюдаемыми
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

export const counterStore = new CounterStore();