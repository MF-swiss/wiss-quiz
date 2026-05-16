import { useState } from 'react';

function Counter1() {
  const [count, setCount] = useState(0);
  const [istSichtbar, setIstSichtbar] = useState(true);

  const erhoehen = () => {
    setCount(count + 5);
  };

  const verringern = () => {
    setCount(count - 5);
  };

  const reset = () => {
    setCount(0);
  };

  const toggle = () => {
    setIstSichtbar(!istSichtbar);
  };

  return (
    <div>
      <button id='sight' onClick={toggle}>
        {istSichtbar ? 'Counter verstecken 🫣' : 'Counter anzeigen 🤓'}
      </button>

      {istSichtbar && (
        <div>
          <p>Aktueller Zähler: {count}</p>
          <button onClick={erhoehen}>Erhöhen +5</button>
          <button onClick={verringern}>Verringern -5</button>
          <button onClick={reset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default Counter1;