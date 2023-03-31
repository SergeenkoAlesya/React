import { memo } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const CounterView = ({
  counterValue,
  handleIncrement,
  handleReset,
  handleDecrement,
}) => {
  console.log("Counter Render");
  const isEven = counterValue % 2 === 0;
  return (
    <div
      className={styles.wrapper}
      style={{ background: isEven ? "red" : "green" }}
    >
      <div className={styles.display}> {counterValue} </div>
      <div className={styles.display}> {isEven ? "Even" : "Odd"} </div>

      <div className={styles.controlButtons}>
        <button className={styles.controlButton} onClick={handleDecrement}>
          -
        </button>
        <button className={styles.controlButton} onClick={handleReset}>
          Reset
        </button>
        <button className={styles.controlButton} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

CounterView.propTypes = {
  counterValue: PropTypes.number,
  handleIncrement: PropTypes.func,
  handleReset: PropTypes.func,
};

export default memo(CounterView);
