"use client";
import { counterStore } from '@/store/TestStore';
import { observer } from 'mobx-react-lite';


export const Counter = observer(() => {
    return (
        <div>
      <h1>Counter: {counterStore.count}</h1>
      <button onClick={() => counterStore.increment()}>Increment</button>
      <button onClick={() => counterStore.decrement()}>Decrement</button>
    </div>
    )
});