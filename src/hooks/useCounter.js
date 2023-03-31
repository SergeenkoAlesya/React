import { useCallback, useState } from "react";

const useCounter = (initialValue, trackCountChange = false) => {
  const [countValue, setCountValue] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    setCountValue((state) => state + 1);
  }, []);
  const handleDecrement = useCallback(() => {
    setCountValue((state) => state - 1);
  }, []);
  const handleReset = () => {
    setCountValue(0);
  };

  const handleAddAmount = useCallback((amount) => {
    setCountValue((state) => state + 1);
  }, []);

  /*useEffect(() => {
    if (trackCountChange) {
      console.log(`Value was changed. Current value is ${countValue} `);
    }
  }, [countValue]);*/

  return {
    countValue,
    handleIncrement,
    handleDecrement,
    handleReset,
    handleAddAmount,
  };
};

export default useCounter;
