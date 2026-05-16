import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const erhoehen = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Aktueller Zähler: {count}</p>
      <button onClick={erhoehen}>Erhöhen</button>
    </div>
  );
}

export default Counter;