import React, {useState} from "react";

function Counter () = {
  const [count, setCount] = {useState(0)};
}

const oneUp = () => {
  setCount(count + 1);
};

const loseOne = () => {
  setCount(count - 1);
};

return <div>
  <h2>Join the Dark Side</h2>
  <p>count: {count}</p>
  <button onClick={oneUp}>Yas, Anakin!</button>
  <button onClick={loseOne}>Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering</button>
  </div>
  );
}
export default Counter;