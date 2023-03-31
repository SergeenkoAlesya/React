//import { useState, useCallback } from "react";
import CounterView from "commonComponents/CounterView";
import { useCounter } from "../../../hooks";

const FunctionalCounterConteiners = () => {
  const { countValue, handleIncrement, handleDecrement, handleReset } =
    useCounter(0);
  //const [countValue, setCount] = useState(0);
  //const [date, setDate] = useState(new Date().getMilliseconds());

  /*useEffect(() => {
    let intreval = setInterval(() => {
      setDate(new Date().getSeconds());
    }, 1000);

    return () => {
      clearInterval(intreval);
    };
  }, []);*/

  /*const handleIncrement = useCallback(() => {
    setCount((state) => state + 1);
  }, []);
  const handleDecrement = () => {
    setCount(countValue - 1);
  };
  const handleReset = () => {
    setCount(0);
  };*/
  // useEffect(() => {
  //  return () => {
  //   console.log("Unmount");
  // };
  //}, []);
  //useEffect(() => console.log("Did mount"), []);
  //useEffect(() => console.log("Did update"), [countValue]);

  //console.log(date);

  return (
    <CounterView
      counterValue={countValue}
      handleIncrement={handleIncrement}
      handleReset={handleReset}
      handleDecrement={handleDecrement}
    />
  );
};

export default FunctionalCounterConteiners;
