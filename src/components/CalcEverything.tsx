import { createSignal, Component } from 'solid-js';

export const CalcEverything: Component = () => {
  console.log('CalcEverything');
  const [v1, setV1] = createSignal(0);
  return (
    <div>
      <input value={v1()} />
    </div>
  );
};
