import { useState } from 'react';
 
function Counter1({ startwert, schritt, titel, max }) {
  const [count, setCount] = useState(startwert);
  const [istSichtbar, setIstSichtbar] = useState(true);
  const [title, setTitel] = useState('Mein Counter:');
  const [countClicks, setCountClicks] = useState(0);
 
  const erhoehen = () => {
    setCount(count + schritt);
    setCountClicks(countClicks + 1);
    if (count + schritt >= max) {
      setCount(max);
    }
  };
 
  const verringern = () => {
    setCount(count - schritt)
    setCountClicks(countClicks + 1);
    if (count - schritt <= 0) {
        setCount(0);
    }
 
  };
 
  const reset = () => {
    setCount(startwert);
    setCountClicks(countClicks + 1);
  };
 
  const plusZehn = () => {
    setCount(count + 10);
    setCountClicks(countClicks + 1);
    if (count + 10 >= max) {
      setCount(max);
    }
  };
 
  const minusZehn = () => {
    setCount(count - 10);
    setCountClicks(countClicks + 1);
    if (count - 10 <= 0) {
        setCount(0);
    }
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
 
export default Counter1;
 