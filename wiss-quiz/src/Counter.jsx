import { useState } from 'react';
 
function Counter({ startwert, schritt, titel, max }) {
  const [count, setCount] = useState(startwert);
  const [istSichtbar, setIstSichtbar] = useState(true);
  const title = 'Mein Counter:';
  const [countClicks, setCountClicks] = useState(startwert);
 
const erhoehen = () => {
  setCount(Math.min(count + schritt, max));
  setCountClicks(countClicks + 1);
};

const verringern = () => {
  setCount(Math.max(count - schritt, 0));
  setCountClicks(countClicks + 1);
};

const plusZehn = () => {
  setCount(Math.min(count + 10, max));
  setCountClicks(countClicks + 1);
};

const minusZehn = () => {
  setCount(Math.max(count - 10, 0));
  setCountClicks(countClicks + 1);
};
 
  const toggle = () => {
    setIstSichtbar(!istSichtbar);
    setCountClicks(countClicks + 1);
  };
 
  const resetClickCounter = () => {
    setCountClicks(0);
  };
 
  return (
    <div>
      <button onClick={toggle}>
        {istSichtbar ? 'Counter Verstecken' : 'Counter Anzeigen'}
      </button>
 
      {istSichtbar && (
      <div>
        <p> {title} {titel} </p>
        <p>Anzahl aller Buttons geklickt: {countClicks}</p>
        <p>Aktueller Zähler: {count}</p>
        <button onClick={erhoehen} disabled={count >= max}>+{schritt}</button>
        <button onClick={plusZehn} disabled={count >= max}>+10</button>
        <button onClick={verringern} disabled={count <= 0}>-{schritt}</button>
        <button onClick={minusZehn} disabled={count <= 0}>-10</button>
        <button onClick={reset}>Reset</button>
        <button onClick={resetClickCounter}>Reset anzahl aller buttons geklickt</button>
      </div>
     )}
    </div>
  );
}
 
export default Counter;
 