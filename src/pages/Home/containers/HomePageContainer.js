import { useCounter } from "hooks";
//import { Fragment } from "react";

const HomePageConteiner = () => {
  const { countValue, handleIncrement, handleDecrement } = useCounter(0, true);
  const isDisable = countValue === 0;
  return (
    <div>
      <h1> Home</h1>

      <p>{countValue}</p>
      <button onClick={handleIncrement}>+</button>
      <button
        disabled={isDisable}
        onClick={isDisable ? () => {} : handleDecrement}
      >
        -
      </button>
    </div>
  );
  /* return (
    <div>
      <h1> Home</h1>
      <p>{countValue}</p>
      <button
        onClick={() => {
          handleAddAmount(5);
        }}
      >
        +5
      </button>

      <button
        onClick={() => {
          handleAddAmount(15);
        }}
      >
        +15
      </button>
    </div>
  );*/
};

export default HomePageConteiner;
