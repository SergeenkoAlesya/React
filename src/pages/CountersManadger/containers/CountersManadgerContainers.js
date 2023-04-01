import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
import Layout from "../components/Layout";
import { isEven } from "utils";

const CountersManadgerContainers = () => {
  const [counters, setCounters] = useState([]);

  const handleCounterCreate = () => {
    const newCounter = {
      id: uuid(),
      countValue: 0,
    };

    setCounters((state) => {
      const updatedCounters = state.map((counter) => {
        return {
          ...counter,
          countValue: isEven(counter.countValue)
            ? counter.countValue + 1
            : counter.countValue,
        };
      });

      updatedCounters.push(newCounter);
      return updatedCounters;
    });
  };

  const handleCounterRemove = useCallback((counterId) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const counterIndexToPemove = countersCopy.findIndex(
        ({ id }) => id === counterId
      );
      countersCopy.splice(counterIndexToPemove, 1);

      return countersCopy.map((counter) => {
        return {
          ...counter,
          countValue: !isEven(counter.counterValue)
            ? counter.countValue - 1
            : counter.countValue,
        };
      });
    });
  }, []);
  const handleCounterIncrement = useCallback((counterId) => {
    setCounters((state) => {
      const counterCopy = structuredClone(state);
      const foundCOunter = counterCopy.find(({ id }) => id === counterId);

      foundCOunter.countValue += 1;
      console.log(foundCOunter);
      return counterCopy;
    });
  }, []);

  const handleCounterDecrement = useCallback((counterId) => {
    setCounters((state) => {
      const counterCopy = structuredClone(state);
      const foundCOunter = counterCopy.find(({ id }) => id === counterId);

      foundCOunter.countValue -= 1;

      return counterCopy;
    });
  }, []);

  const handleCounterReset = useCallback((counterId) => {
    setCounters((state) => {
      const counterCopy = structuredClone(state);
      const foundCOunter = counterCopy.find(({ id }) => id === counterId);

      foundCOunter.countValue = 0;

      return counterCopy;
    });
  }, []);

  const handleRemoveAllCounters = () => {
    setCounters([]);
  };

  const totalSum = counters.reduce(
    (result, { countValue }) => countValue + result,
    0
  );
  return (
    <Layout
      counters={counters}
      totalSum={totalSum}
      handleCounterCreate={handleCounterCreate}
      handleCounterRemove={handleCounterRemove}
      handleCounterIncrement={handleCounterIncrement}
      handleCounterDecrement={handleCounterDecrement}
      handleCounterReset={handleCounterReset}
      handleRemoveAllCounters={handleRemoveAllCounters}
    />
  );
};

export default CountersManadgerContainers;
